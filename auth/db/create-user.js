import bcrypt from 'bcrypt';
import UserModel from '../models/user-model.js';

export const createUser = async (req, res) => {
    const hash = await bcrypt.hash('secret', 10);
    try {
        const user = await UserModel.create({
            username: 'user',
            password: hash,
        });
        res.status(201).json({ message: 'Utilisateur créé avec succès', data: user });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur', data: error });
    }
}

export default createUser;
