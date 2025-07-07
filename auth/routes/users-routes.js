import UserModel from '../models/user-model.js';
import jwt from 'jsonwebtoken';
import { private_key } from '../private_keys.js';
import bcrypt from 'bcrypt';

export async function userLogin(req, res) {
    try {
        const user = await UserModel.findOne({ username: req.body.username });
        if (!user) {
            const message = `L'utilisateur demandé n'existe pas !`;
            return res.status(404).json({ message });
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            const message = `Le mot de passe est incorrect !`;
            return res.status(401).json({ message, data: req.body.username });
        }
        
        const token = jwt.sign(
            { idUser: user._id, uName: user.username },
            private_key,
            { expiresIn: '2h' }
        );
        return res.json({ message: 'Connecté avec succès', data: user.username, token });
    } catch (error) {
        const message = `L'utilisateur n'a pas pu être trouvé !`;
        return res.status(500).json({ message, data: error });
    }
}
