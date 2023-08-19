const {
  getHandlerTodosProductos,
} = require('../../Handlers/HandlersInventario/GetHandlerInventario');
const {
  postHandlerProducto,
} = require('../../Handlers/HandlersInventario/postHandlerInventario');

const router = require('express').Router();

router.post('/', postHandlerProducto);
router.get('/', getHandlerTodosProductos);
// router.put('/:id', putHandlerUsuario);
// router.delete('/:id', deleteHandlerUsuario);

module.exports = router;
