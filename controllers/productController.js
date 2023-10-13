const connectDB = require('../db');

// Obtener productos en stock
const getProductsInStock = async (req, res) => {
  try {
    const client = await connectDB();
    const db = client.db('drenvioSurcursal1');
    const productsCollection = db.collection('products');

    const products = await productsCollection.find({ stock: { $gt: 0 } }).toArray();
    client.close();

    res.json(products);
  } catch (error) {
    console.error('Error al buscar productos en stock:', error);
    res.status(500).send('Error del servidor');
  }
};

module.exports = {
  getProductsInStock,
};
