const {Inventario} = require('../../DB.js');
const {getProductoFiltro} = require('./GetInventarioController.js');

const postProductoController = async (producto) => {
  try {
    console.log('Esto es producto en controller ', producto);
    const productoExistentePorId = await getProductoFiltro({
      idProducto: producto.idProducto,
    });
    if (productoExistentePorId.length !== 0) {
      console.log('Esto es por ID ', productoExistentePorId);
      throw new Error('El producto ya existe');
    }
    const productoExistentePorNombre = await getProductoFiltro({
      nombreProducto: producto.nombreProducto,
    });
    if (productoExistentePorNombre.length !== 0) {
      console.log('Esto es por nombre ', productoExistentePorNombre);
      throw new Error('El producto ya existe');
    }
    const nuevoProducto = await Inventario.create(producto);

    return nuevoProducto;
  } catch (error) {
    return error.message;
  }
};

module.exports = {postProductoController};
