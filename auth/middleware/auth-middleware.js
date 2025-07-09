import jwt from 'jsonwebtoken';

const private_key = process.env.JWT_PRIVATE_KEYS;

export async function authMdlr(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token manquant ou mal formé' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, private_key);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Erreur JWT:", error.message);
        return res.status(401).json({ message: 'Erreur lors de la vérification du token' });
    }
}
