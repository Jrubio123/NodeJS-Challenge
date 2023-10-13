const specialPriceSchema = new mongoose.Schema({
  product_name: String,
  special_price: Number,
});

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  special_prices: [specialPriceSchema],
});

module.exports = mongoose.model('User', userSchema);
