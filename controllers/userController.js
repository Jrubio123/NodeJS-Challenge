const { MongoClient } = require('mongodb');
const connectDB = require('../db');

async function getSpecialPrice(req, res) {
  const { user_id, nombre_producto } = req.params;

  try {
    const client = await connectDB();
    const db = client.db('drenvioSurcursal1');
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ id: parseInt(user_id) });

    if (user && user.special_prices) {
      const specialPrice = user.special_prices.find(
        (price) => price.product_name === nombre_producto
      );
      if (specialPrice) {
        res.json({ special_price: specialPrice.special_price });
      } else {
        res.json({ special_price: -1 });
      }
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error al buscar precio especial:', error);
    res.status(500).json({ error: 'Error del servidor' });
  } finally {
    client.close();
  }
}

module.exports = {
  getSpecialPrice,
};
