const express = require('express');
const personaRoutes = require('./PersonaRoutes');

const router = express.Router();

router.use('/persona', personaRoutes);
module.exports = router;

