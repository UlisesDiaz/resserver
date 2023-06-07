const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Token de autenticación no proporcionado.' });
    }

    try {
        const decoded = jwt.verify(token, 'secreto'); // Reemplaza 'secreto' por tu propia clave secreta
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token de autenticación inválido.' });
    }
};

module.exports = authMiddleware;
