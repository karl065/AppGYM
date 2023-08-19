const {
  deleteHandlerUsuario,
} = require('../../Handlers/HandlersUsuario/DeleteHandlerUsuario');
const {
  getHandlerTodosUsuarios,
} = require('../../Handlers/HandlersUsuario/GetHandlerUsuario');
const {
  putHandlerUsuario,
} = require('../../Handlers/HandlersUsuario/PutHandlerUsuario');
const {
  postHandlerUsuario,
} = require('../../Handlers/HandlersUsuario/postHandlerUsuario');

const router = require('express').Router();

router.post('/', postHandlerUsuario);
router.get('/', getHandlerTodosUsuarios);
router.put('/:id', putHandlerUsuario);
router.delete('/:id', deleteHandlerUsuario);

module.exports = router;
