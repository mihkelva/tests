const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");
const multer = require('multer');

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});


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

/** Add something here*/

module.exports = router;

