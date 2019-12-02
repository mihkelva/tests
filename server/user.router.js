const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");
const multer = require('multer');

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});

// Test 7 õige variant
/*
router.post("/", async (req, res)=> {
  console.log('body', req.body);
  const user = new User(req.body);
  user.save(err => {
    if (err) {
      console.log("Error:", err);
      res.send(500);
      return;
    }
    console.log("Success create!");
    res.send(201);
  });
});
*/

//
// router.post("/", (req, res) => {
//   const props = {
//     fullName: "",
//     phoneNumber: "",
//     address: "",
//   };
//   const user = new User(props);
//   user.save( err=> {
//     if(err){
//       console.log("Error:", err);
//       res.send(500);
//       return;
//     }
//     console.log("Success create!");
//     res.send(201);
//   });
// });

router.post("/", async (req, res)=> {
  const filter = {personalCode: req.body.personalCode};
  const doc = req.body;
  const options = {
    upsert: true
  };
  try{const {n, nModified} =await User.updateOne(filter, doc, options);
    console.log("n", n,"nModified", nModified);
    res.send(200);
  }
  catch (err) {
    res.send(500);
    console.log(err);
  }








  // console.log('body', req.body);
  // const user = new User(req.body);
  // user.save(err => {
  //   if (err) {
  //     console.log("Error:", err);
  //     res.send(500);
  //     return;
  //   }
  //   console.log("Success create!");
  //   res.send(201);
  // });
});

module.exports = router;

