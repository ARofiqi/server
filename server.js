const bodyParser = require("body-parser");
const express = require("express");
const mahasiswaController = require("./controllers/mahasiswaControllers");
const dosenController = require("./controllers/dosenControllers");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/mahasiswa", mahasiswaController);
app.use("/dosen", dosenController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
