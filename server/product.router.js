const express = require("express");
const router = express.Router();
const {Product} = require("./product.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await Product.find({});
  res.send(xs);
});

router.get("/random", async (req, res)=>{
  const xs = await Product.find({});
  const r = getRandomInt(0, xs.length - 1);
  res.status(200).send(xs[r])
});

// router.get("/similar/:productId", async (req, res)=>{
//   res.status(500).send("Implement");
//   //1) res.status("vastus");  <--- network tuleb "vastus
//   // 2) leiame üles toote, lähme sisse product.model.js
//   // 3) kasutame
//   // Product.findById (mongoose.Types.ObjectId(req.params.productId), (err,doc) => (
//   // if(err) return res.status(500).send("viga")
//   // console.log("doc", doc);
//   // res.send([doc]): <--- saab kasutada vaid ühte res'i
//   // }); see tagastab
// });


router.get("/similar/:productId", async (req, res)=>{
  res.status(500).send("Implement");
  console.log("productId", req.params.productId);
  const product = await Product.FindById(req.params.productId);
  const brand = product.title.split(" ")[0];
  const products = await Product.find({"title" : { $regex: brand, $options: "i"}});

  res.send(products);
});

module.exports = router;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
