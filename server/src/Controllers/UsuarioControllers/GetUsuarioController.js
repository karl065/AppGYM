const {Usuarios} = require('../../DB.js');

const getTodosUsuarios = async () => {
  try {
    return await Usuarios.findAll();
  } catch (error) {
    return error.message;
  }
};

const getUsuarioPorRole = async (datos) => {
  try {
    const whereConditions = {};
    if (datos.tipoDocumento) {
      whereConditions.tipoDocumento = datos.tipoDocumento;
    }
    if (datos.numeroDocumento) {
      whereConditions.numeroDocumento = datos.numeroDocumento;
    }
    if (datos.nombre) {
      whereConditions.nombre = datos.nombre;
    }
    if (datos.apellido) {
      whereConditions.apellido = datos.apellido;
    }
    if (datos.telefono) {
      whereConditions.telefono = datos.telefono;
    }
    if (datos.email) {
      whereConditions.email = datos.email;
    }
    if (datos.user) {
      whereConditions.user = datos.user;
    }
    if (datos.role) {
      whereConditions.role = datos.role;
    }
    if (datos.userStatus) {
      whereConditions.userStatus = datos.userStatus;
    }
    return await Usuarios.findAll({
      where: whereConditions,
    });
  } catch (error) {
    return error.message;
  }
};

module.exports = {getTodosUsuarios, getUsuarioPorRole};
