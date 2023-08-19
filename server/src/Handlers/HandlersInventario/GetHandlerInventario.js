const {
  getProductoFiltro,
  getTodosProductos,
} = require('../../Controllers/InventarioControllers/GetInventarioController');

const getHandlerTodosProductos = async (req, res) => {
  const {
    idProducto,
    nombreProducto,
    minPrecioV,
    maxPrecioV,
    minPrecioC,
    maxPrecioC,
    minCant,
    maxCant,
    genero,
    etapa,
    status,
  } = req.query;
  try {
    if (
      idProducto ||
      nombreProducto ||
      minPrecioV ||
      maxPrecioV ||
      minPrecioC ||
      maxPrecioC ||
      minCant ||
      maxCant ||
      genero ||
      etapa ||
      status
    ) {
      const productos = await getProductoFiltro({
        idProducto,
        nombreProducto,
        minPrecioV,
        maxPrecioV,
        minPrecioC,
        maxPrecioC,
        minCant,
        maxCant,
        genero,
        etapa,
        status,
      });
      return res.status(200).json(productos);
    }
    const productos = await getTodosProductos();
    return res.status(200).json(productos);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {getHandlerTodosProductos};
