import dotenv from "dotenv";
import express from "express";
import proxy from "express-http-proxy";
import { adminMdlr } from "./middleware/admin-middleware.js";
dotenv.config();

const app = express();

app.use("/api/auth", proxy(process.env.AUTH_PROXY));
app.use("/api/products", adminMdlr, proxy(process.env.PRODUCTS_PROXY));

app.listen(process.env.PORT, () => {
  console.log("API Gateway en cours d'exécution sur le port 3000");
});
