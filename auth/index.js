import express from "express";
import "./db/mongoose.js";
import dotenv from "dotenv";
import userRoutes from "./routes/user-routes.js";

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(
    "Le service d'authentification est en cours d'exécution sur le port 8081"
  );
});
