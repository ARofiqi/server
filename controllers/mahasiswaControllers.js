const express = require("express");
const router = express.Router();
const db = require("../models/db");
const { error } = require("console");

const tableName = "mahasiswa";

router.get("/", (req, res) => {
  db.query(`SELECT * FROM mahasiswa`, (error, result) => {
    if (error) {
      console.error("Error fetching mahasiswa : ", error);
      res.status(500).json({ massage: "Internal Server Error" });
    } else {
      res.json(result);
    }
  });
});

router.get("/:nim", (req, res) => {
  const mahasiswaID = req.params.nim;
  db.query(`SELECT * FROM ${tableName} WHERE nim = ?`, mahasiswaID, (error, result) => {
    if (error) {
      console.error("Error fetching mahasiswa : ", error);
      res.status(500).json({ massage: "Internal Server Error" });
    } else if (result.length === 0) {
      res.status(404).json({ massage: "Mahasiswa tidak ditemukan" });
    } else {
      res.json(result[0]);
    }
  });
});

router.put("/:nim", (req, res) => {
  const mahasiswaNIM = req.params.nim;
  const { nama, gender, prodi, alamat } = req.body;
  db.query(`UPDATE ${tableName} SET nama = ?, gender = ?, prodi = ?, alamat = ? WHERE nim = ?`, [nama, gender, prodi, alamat, mahasiswaNIM], (error) => {
    if (error) {
      console.error("Error updating mahasiswa : ", error);
      res.status(500).json({ massage: "Internal Server Error" });
    } else {
      res.json({ massage: "Updatin mahasiswa successfullys" });
    }
  });
});

router.post("/:nim", (req, res) => {
  const nim = req.params.nim;
  const { nama, gender, prodi, alamat } = req.body;
  db.query(`INSERT INTO ${tableName} (nim, nama, gender, prodi, alamat) VALUES (?, ?, ?, ?, ?)`, [nim, nama, gender, prodi, alamat], (error) => {
    if (error) {
      console.error("Error adding mahasiswa : ", error);
      res.status(500).json({ massage: "Internal Server Error" });
    } else {
      res.json({ massage: "Adding mahasiswa successfullys" });
    }
  });
});

router.delete("/:nim", (req, res) => {
  const nim = req.params.nim;
  db.query(`DELETE FROM ${tableName} WHERE nim = ?`, [nim], (error) => {
    if (error) {
      console.error("Error deleting mahasiswa : ", error);
      res.status(500).json({ massage: "Internal Server Error" });
    } else {
      res.json({ massage: "Deleting mahasiswa successfullys" });
    }
  });
});

module.exports = router;
