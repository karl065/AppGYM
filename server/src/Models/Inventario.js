const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Inventario', {
    idProducto: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nombreProducto: {
      type: DataTypes.STRING,
    },
    precioVenta: {
      type: DataTypes.NUMBER,
    },
    precioCompra: {
      type: DataTypes.NUMBER,
    },
    cantidad: {
      type: DataTypes.INTEGER,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    genero: {
      type: DataTypes.ENUM('M', 'F', 'U'), // M = Masculino, F = Femenino, U = Unisex
    },
    etapa: {
      type: DataTypes.ENUM('N', 'A'), // N = Niños, A = Adultos
    },
    status: {
      type: DataTypes.ENUM('D', 'N', 'Di'), // D = Disponible, N = No disponible, Di = Descontinuado
    },
  });
};
