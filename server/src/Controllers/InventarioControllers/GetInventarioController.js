const {Op} = require('sequelize');
const {Inventario} = require('../../DB.js');

const getTodosProductos = async () => {
  try {
    return await Inventario.findAll();
  } catch (error) {
    return error.message;
  }
};

const getProductoFiltro = async ({
  idProducto,
  nombreProducto,
  minPrecioV = 0,
  maxPrecioV,
  minPrecioC = 0,
  maxPrecioC,
  minCant = 0,
  maxCant,
  genero,
  etapa,
  status,
}) => {
  try {
    let maxValue;
    if (!maxPrecioV || !maxPrecioC || !maxCant) {
      maxValue = 9223372036854775807n;
    }
    const whereConditions = {
      precioVenta: {
        [Op.between]: [minPrecioV, maxPrecioV ? maxPrecioV : maxValue],
      },
      precioCompra: {
        [Op.between]: [minPrecioC, maxPrecioC ? maxPrecioC : maxValue],
      },
      cantidad: {[Op.between]: [minCant, maxCant ? maxCant : maxValue]},
    };
    if (idProducto) {
      whereConditions.idProducto = idProducto;
    }
    if (nombreProducto) {
      whereConditions.nombreProducto = nombreProducto;
    }
    if (genero) {
      whereConditions.genero = genero;
    }
    if (etapa) {
      whereConditions.etapa = etapa;
    }
    if (status) {
      whereConditions.status = status;
    }
    return await Inventario.findAll({
      where: whereConditions,
    });
  } catch (error) {
    return error.message;
  }
};

module.exports = {getTodosProductos, getProductoFiltro};
