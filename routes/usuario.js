const { Router } = require('express');
const router = Router();

const {usuarioGet, usuarioPost} = require('../controllers/usuario')

router.get('/', usuarioGet);

router.post('/', usuarioPost);

module.exports = router;