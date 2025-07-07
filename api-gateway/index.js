import dotenv from "dotenv";
import express from "express";
import proxy from "express-http-proxy";
dotenv.config();

const app = express();

const PORT = process.env.PORT;
const PROXY = process.env.PROXY;

app.use("/api/auth", proxy(PROXY));

app.listen(PORT, () => {
  console.log("API Gateway en cours d'exécution sur le port 3000");
});
