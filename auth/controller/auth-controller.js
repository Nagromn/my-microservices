import UserModel from "../models/user-model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const private_key = process.env.JWT_PRIVATE_KEYS;

export async function userLogin(req, res) {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    if (!user) {
      const message = `L'utilisateur demandé n'existe pas !`;
      return res.status(404).json({ message });
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      const message = `Le mot de passe est incorrect !`;
      return res.status(401).json({ message, data: req.body.username });
    }

    const token = jwt.sign(
      { idUser: user._id, uName: user.username },
      private_key,
      { expiresIn: "2h" }
    );
    return res.json({
      message: "Connecté avec succès",
      data: user.username,
      token,
    });
  } catch (error) {
    const message = `L'utilisateur n'a pas pu être trouvé !`;
    return res.status(500).json({ message, data: error });
  }
}

export async function userRegister(req, res) {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      username,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ message: "Utilisateur créé avec succès", data: user.username });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de l'inscription", data: error });
  }
}
