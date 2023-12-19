const express = require("express");
const router = express.Router();
const db = require("../models/db");

const tableName = "dosen";

router.get("/", (req, res) => {
  db.query(`SELECT * FROM ${tableName}`, (error, result) => {
    if (error) {
      console.error("Error fetching mahasiswa : ", error);
      res.status(500).json({ massage: "Internal Server Error" });
    } else {
      res.json(result);
    }
  });
});

router.get("/:nidn", (req, res) => {
  const dosenID = req.params.nidn;
  db.query(`SELECT * FROM ${tableName} WHERE nidn = ?`, dosenID, (error, result) => {
    if (error) {
      console.error("Error fetching dosen : ", error);
      res.status(500).json({ massage: "Internal Server Error" });
    } else if (result.length === 0) {
      res.status(404).json({ massage: "dosen tidak ditemukan" });
    } else {
      res.json(result[0]);
    }
  });
});

router.put("/:nidn", (req, res) => {
  const dosenNIDN = req.params.nidn;
  const { nama, gender, prodi, alamat } = req.body;
  db.query(`UPDATE ${tableName} SET nama = ?, gender = ?, prodi = ?, alamat = ? WHERE nidn = ?`, [nama, gender, prodi, alamat, dosenNIDN], (error) => {
    if (error) {
      console.error("Error updating dosen : ", error);
      res.status(500).json({ massage: "Internal Server Error" });
    } else {
      res.json({ massage: "Updatin dosen successfullys" });
    }
  });
});

router.post("/:nidn", (req, res) => {
  const nidn = req.params.nidn;
  const { nama, gender, prodi, alamat } = req.body;
  db.query(`INSERT INTO ${tableName} (nim, nama, gender, prodi, alamat) VALUES (?, ?, ?, ?, ?)`, [nidn, nama, gender, prodi, alamat], (error) => {
    if (error) {
      console.error("Error adding dosen : ", error);
      res.status(500).json({ massage: "Internal Server Error" });
    } else {
      res.json({ massage: "Adding dosen successfullys" });
    }
  });
});

router.delete("/:nidn", (req, res) => {
  const nidn = req.params.nidn;
  db.query(`DELETE FROM ${tableName} WHERE nidn = ?`, [nidn], (error) => {
    if (error) {
      console.error("Error deleting dosen : ", error);
      res.status(500).json({ massage: "Internal Server Error" });
    } else {
      res.json({ massage: "Deleting dosen successfullys" });
    }
  });
});

module.exports = router;
