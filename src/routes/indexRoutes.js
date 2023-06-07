const express = require('express');
const personaRoutes = require('./PersonaRoutes');
const loginRoutes = require('./LoginRoutes');
const router = express.Router();

router.use('/persona', personaRoutes);
router.use('/login', loginRoutes);
module.exports = router;

