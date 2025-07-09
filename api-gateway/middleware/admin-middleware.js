export async function adminMdlr(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token manquant ou mal formé" });
  }

  try {
    const response = await fetch(`${process.env.AUTH_PROXY}/me`, {
      headers: {
        Authorization: authHeader
      }
    });

    if (!response.ok) {
      return res.status(401).json({ message: "Utilisateur non authentifié" });
    }

    const data = await response.json();

    if (data.user?.uRole  !== "admin") {
      return res.status(403).json({ message: "Accès interdit : rôle admin requis" });
    }

    req.user = data.user;
    next();
  } catch (err) {
    console.error("Erreur /auth/me :", err.message);
    return res.status(500).json({ message: "Erreur serveur Auth" });
  }
}
