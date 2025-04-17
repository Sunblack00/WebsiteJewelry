const express = require("express");
const Product = require("../model/Product");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    const updateProducts = products.map((product) => {
      return {
        ...product._doc,
        imageUrls: product.images.map((image) =>
          image.replace(
            "../../images",
            "https://jewelry-backend-inrv.onrender.com/images"
          )
        ),
      };
    });
    res.json(updateProducts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
