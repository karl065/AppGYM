const {
  getTodosUsuarios,
  getUsuarioPorRole,
} = require('../../Controllers/UsuarioControllers/GetUsuarioController');

const getHandlerTodosUsuarios = async (req, res) => {
  const {
    tipoDocumento,
    numeroDocumento,
    nombre,
    apellido,
    telefono,
    email,
    user,
    role,
    userStatus,
  } = req.query;
  try {
    if (
      tipoDocumento ||
      numeroDocumento ||
      nombre ||
      apellido ||
      telefono ||
      email ||
      user ||
      role ||
      userStatus
    ) {
      const usuarios = await getUsuarioPorRole({
        tipoDocumento,
        numeroDocumento,
        nombre,
        apellido,
        telefono,
        email,
        user,
        role,
        userStatus,
      });
      return res.status(200).json(usuarios);
    }
    const usuarios = await getTodosUsuarios();
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {getHandlerTodosUsuarios};
