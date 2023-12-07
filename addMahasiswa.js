const { response } = require("express");

const updateData = {
  nim: "1010102",
  nama: "Rofiqi",
  gender: "L",
  prodi: "TI",
  alamat: "Caringin",
};

fetch(`http://localhost:3000/mahasiswa/${updateData.nim}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("error : ", err));
