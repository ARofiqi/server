const nidn = "1010101";
const data = {
  nim: nidn,
  nama: "Ronaldo",
  gender: "L",
  prodi: "TE",
  alamat: "Cibolang",
};

fetch(`http://localhost:3000/mahasiswa/${nidn}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("error : ", err));
