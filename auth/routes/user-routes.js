import express from "express";
import { userLogin, userRegister } from "../controller/auth-controller.js";

const router = express.Router();

router.post("/login", userLogin);
router.post("/register", userRegister);

export default router;
