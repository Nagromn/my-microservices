export async function authMdlr(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Token manquant ou mal formé' });
    }

    const token = authHeader.split(' ')[1];

    try {
        jwt.verify(token, private_key, (err, decoded) => {
            if (err) return res.status(401).json({ message: 'Token invalide' });
            req.user = decoded;
            next();
        });
    } catch (error) {
        return res.status(401).json({ message: 'Erreur lors de la vérification du token' });
    }
}
