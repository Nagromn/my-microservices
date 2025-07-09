import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGOOSE_URL = process.env.MONGOOSE_URL;

mongoose.connect(MONGOOSE_URL);

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("❌ Échec de connexion MongoDB :", error);
});

db.once("open", () => {
  console.log("✅ Connexion à MongoDB établie");
});
