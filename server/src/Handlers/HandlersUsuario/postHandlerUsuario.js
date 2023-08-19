const {
  postUsuarios,
} = require('../../Controllers/UsuarioControllers/PostUsuarioController');

const postHandlerUsuario = async (req, res) => {
  const {
    tipoDocumento,
    numeroDocumento,
    nombre,
    apellido,
    telefono,
    email,
    user,
    password,
    role,
    userStatus,
  } = req.body;
  try {
    const nuevoUsuario = await postUsuarios(
      tipoDocumento,
      numeroDocumento,
      nombre,
      apellido,
      telefono,
      email,
      user,
      password,
      role,
      userStatus
    );
    return res.status(200).json(nuevoUsuario);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {postHandlerUsuario};
