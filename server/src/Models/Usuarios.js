const {DataTypes} = require('sequelize');

/* El código que proporcionó está definiendo un modelo Sequelize para una tabla llamada "Usuarios" en
una base de datos. */
module.exports = (sequelize) => {
  sequelize.define(
    'Usuarios',
    {
      idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipoDocumento: {
        type: DataTypes.ENUM('CC', 'TI'),
      },
      numeroDocumento: {
        type: DataTypes.INTEGER,
      },
      nombre: {
        type: DataTypes.STRING,
      },
      apellido: {
        type: DataTypes.STRING,
      },
      telefono: {
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.ENUM('SuperUser', 'Admin', 'Cliente', 'Empleados'),
        allowNull: false,
      },
      userStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
