const {
  deleteUsuarioController,
} = require('../../Controllers/UsuarioControllers/DeleteUsuarioController');

const deleteHandlerUsuario = async (req, res) => {
  const {id} = req.params;
  try {
    const user = await deleteUsuarioController(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {deleteHandlerUsuario};
