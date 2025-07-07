const express = require("express");
const proxy = require("express-http-proxy");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
const PROXY = process.env.PROXY;

app.use("/api/auth", proxy(PROXY));

app.listen(PORT, () => {
  console.log("API Gateway en cours d'exécution sur le port 3000");
});
