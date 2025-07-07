import express from "express";
import "./db/mongoose.js";
import { userLogin, userRegister } from "./controller/auth-controller.js";
require("dotenv").config();

const app = express();
app.use(express.json());

app.post("/login", userLogin);
app.post("/register", userRegister);

app.listen(PORT, () => {
  console.log(
    "Le service d'authentification est en cours d'exécution sur le port 8081"
  );
});
