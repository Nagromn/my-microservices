import express from "express";
import "./db/mongoose.js";
import dotenv from "dotenv";
import productRoutes from "./routes/product-routes.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(
    "Le service des produits est en cours d'exécution sur le port 8082"
  );
});
