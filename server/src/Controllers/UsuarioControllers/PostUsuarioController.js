const bcryptjs = require('bcryptjs');
const {Usuarios} = require('../../DB.js');
const {getUsuarioPorRole} = require('./GetUsuarioController.js');

const postUsuarios = async (
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
) => {
  try {
    if (password) password = await bcryptjs.hash(password, 10);
    const usuarioExistente = await getUsuarioPorRole({numeroDocumento});
    if (usuarioExistente.length !== 0) {
      throw new Error('El usuario ya existe');
    }
    const nuevoUsuario = await Usuarios.create({
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
    });

    return nuevoUsuario;
  } catch (error) {
    return error.message;
  }
};

module.exports = {postUsuarios};
