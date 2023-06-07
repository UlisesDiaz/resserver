const jwt = require('jsonwebtoken');

// Función para generar un token JWT
const generateToken = (payload) => {
  const secretKey = process.env.JWT_SECRET; 
  const options = {
    expiresIn: '1h', // Duración del token (opcional)
  };
  return jwt.sign(payload, secretKey, options);
};

// Middleware de autenticación
const authenticateToken = (req, res, next) => {
  const secretKey = process.env.JWT_SECRET; 
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.apiError(null, 'Token de autenticación no proporcionado.');
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.apiError('Token de autenticación inválido.' + err);
    }
    req.user = decoded; // Agrega el objeto decodificado al objeto de solicitud (req)
    next();
  });
};

module.exports = { generateToken, authenticateToken };
