const { response } = require("express");

const mahasiswaNIM = "1010101";
const updateData = {
  nim: mahasiswaNIM,
  nama: "Ronaldo",
  gender: "L",
  prodi: "TE",
  alamat: "Cibolang",
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNIM}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("error : ", err));
