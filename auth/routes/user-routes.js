import express from "express";
import { userLogin, userRegister, getUserInfoFromToken } from "../controller/auth-controller.js";
import { authMdlr } from "../middleware/auth-middleware.js";

const router = express.Router();

router.post("/login", userLogin);
router.post("/register", userRegister);
router.get("/me", authMdlr, getUserInfoFromToken );

export default router;
