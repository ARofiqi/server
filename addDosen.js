const data = {
  nim: "1010104",
  nama: "Rofiqi",
  gender: "L",
  prodi: "TI",
  alamat: "Caringin",
};

fetch(`http://localhost:3000/mahasiswa/${data.nim}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("error : ", err));
