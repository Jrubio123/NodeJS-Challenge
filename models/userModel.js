const { ObjectId } = require('mongodb');


const specialPriceSchema = {
  product_name: String,
  special_price: Number,
};

// Definición del esquema de usuario
const userSchema = {
  id: Number,
  name: String,
  special_prices: [specialPriceSchema],
};


module.exports = userSchema;
