const bodyParser = require("body-parser");
const express = require("express");
const mahasiswaController = require("./controllers/mahasiswaControllers");

const app = express();
const PORT = 3000;

app.use("/mahasiswa", mahasiswaController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
