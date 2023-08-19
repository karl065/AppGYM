const {Usuarios} = require('../../DB.js');

const deleteUsuarioController = async (idUsuario) => {
  try {
    const user = await Usuarios.findByPk(idUsuario);
    await user.destroy({where: {idUsuario}});
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {deleteUsuarioController};
