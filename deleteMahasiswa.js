const { response } = require("express");

const nim = "1010102";

fetch(`http://localhost:3000/mahasiswa/${nim}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("error : ", err));
