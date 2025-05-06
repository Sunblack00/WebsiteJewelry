const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
  stone: String,
  size: Number,
  metal: String,
  price: Number,
  quantity: Number,
});

const productDetailsSchema = new mongoose.Schema({
  fitAndStyle: [String],
  composition: String,
  clarity: String,
  diamondWeight: String,
  totalNumber: Number,
  care: String,
});

const productSchema = new mongoose.Schema({
  id:{type: Number, unique: true},
  name: String,
  type: String,
  images: [String],
  loc: String,
  options: {
    stones: [String],
    sizes: [Number],
    metals: [String],
  },
  variants: [variantSchema],
  recentlySold: Number,
  productDetails: productDetailsSchema,
  shortDescription: String,
  detailedDescription: [String],
});

module.exports = mongoose.model("Product", productSchema);
