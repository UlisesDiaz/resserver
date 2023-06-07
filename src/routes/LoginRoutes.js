const {Router} = require('express');
const router = Router();
const loginController = require('../controllers/LoginController');
/**
 * @swagger
 * tags:
 *   name: Login
 *   description: API de gestión de usuarios
 * /api/login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Iniciar sesión en la aplicación con credenciales de usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: john.doe
 *               password: 123456
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *             example:
 *               token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       401:
 *         description: Credenciales inválidas
 *       500:
 *         description: Error interno del servidor
 */
router.post('/', loginController.login);

module.exports = router;