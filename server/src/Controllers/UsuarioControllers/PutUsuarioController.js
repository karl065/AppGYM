const {Usuarios} = require('../../DB.js');

const putUsuarioController = async (updateData, idUsuario) => {
  try {
    await Usuarios.update(updateData, {
      where: {idUsuario},
    });
    const user = await Usuarios.findByPk(idUsuario);
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {putUsuarioController};
