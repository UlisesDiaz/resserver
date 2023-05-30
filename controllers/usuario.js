const { response } = require('express');

const usuarioGet = (req, res = response) => {
    res.json({ msg: "usuario api - get" });
}
const usuarioPost = (req, res = response) => {
    res.json({ msg: "usuario api - post" });
}

module.exports = { usuarioGet, usuarioPost }