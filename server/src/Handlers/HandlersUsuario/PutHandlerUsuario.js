const bcryptjs = require('bcryptjs');
const {
  putUsuarioController,
} = require('../../Controllers/UsuarioControllers/PutUsuarioController');

const putHandlerUsuario = async (req, res) => {
  const {id} = req.params;
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
    let passwordHash;
    if (password) {
      passwordHash = await bcryptjs.hash(password, 10);
    }
    const datosUsuario = {
      ...(tipoDocumento !== undefined && {tipoDocumento}),
      ...(numeroDocumento !== undefined && {numeroDocumento}),
      ...(nombre !== undefined && {nombre}),
      ...(apellido !== undefined && {apellido}),
      ...(telefono !== undefined && {telefono}),
      ...(email !== undefined && {email}),
      ...(user !== undefined && {user}),
      ...(password !== undefined && {password: passwordHash}),
      ...(role !== undefined && {role}),
      ...(userStatus !== undefined && {userStatus}),
    };
    const usuarioActualizado = await putUsuarioController(datosUsuario, id);
    return res.status(200).json(usuarioActualizado);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {putHandlerUsuario};
