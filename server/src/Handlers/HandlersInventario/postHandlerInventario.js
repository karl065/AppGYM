const {
  postProductoController,
} = require('../../Controllers/InventarioControllers/PostInventarioController');

const postHandlerProducto = async (req, res) => {
  const {
    idProducto,
    nombreProducto,
    precioVenta,
    precioCompra,
    cantidad,
    descripcion,
    genero,
    etapa,
    status,
  } = req.body;
  try {
    const nuevoProducto = await postProductoController({
      idProducto,
      nombreProducto,
      precioVenta,
      precioCompra,
      cantidad,
      descripcion,
      genero,
      etapa,
      status,
    });
    return res.status(200).json(nuevoProducto);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {postHandlerProducto};
