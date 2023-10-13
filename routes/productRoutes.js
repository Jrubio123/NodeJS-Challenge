const express = require('express');
const router = express.Router();
const connectDB = require('../db'); // Importa la función de conexión a la base de datos

router.get('/', async (req, res) => {
  try {
    const client = await connectDB(); // Conecta a la base de datos
    const db = client.db('drenvioSurcursal1'); // Nombre de tu base de datos
    const productsCollection = db.collection('products'); // Nombre de tu colección de productos

    const products = await productsCollection.find({ stock: { $gt: 0 } }).toArray();
    client.close();

    res.json(products);
  } catch (error) {
    console.error('Error al buscar productos en stock:', error);
    res.status(500).send('Error del servidor');
  }
});

module.exports = router;
