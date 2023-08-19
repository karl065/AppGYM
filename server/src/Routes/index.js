const {Router} = require('express');
const usuario = require('./RoutesUsuario/RoutesUsuario.js');
const inventario = require('./RoutesInventario/RoutesInventario.js');
const router = Router();

router.use('/usuario', usuario);
router.use('/inventario', inventario);
module.exports = router;
