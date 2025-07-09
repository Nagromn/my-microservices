import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Route des produits");
});

export default router;
