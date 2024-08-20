const express = require("express");
const User = require("../models/user");
const TvShows = require("../models/tvShow");
const router = express.Router();
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

router.get("/:id/watchList", (req, res, next) => {
  User.find({ id: req.params.id })
    .then((user) => {
      if (user) {
        return user.watchList;
      }
      res.json({ mgs: "Error has occured!" });
    })
    .then((watchList) => {
      TvShows.find({ _id: { $in: watchList } })
        .then((tvShows) => {
          res.json({
            msg: "Watch List successfully retrieved",
            watchList: tvShows,
          });
        })
        .catch((err) => {
          console.log(err);
          res.json({ mgs: "Error has occured!" });
        });
    })
    .catch((err) => {
      console.log(err);
      res.json({ mgs: "Error has occured!" });
    });
});

//register new user
router.post("/registerUser", (req, res) => {
  var data = req.body;
  var encrypted = encryptor.encrypt(data.password);
  var newUser = new User({
    userName: data.userName,
    email: data.email,
    password: encrypted,
  });
  try {
    newUser.save().then(() => {
      console.log("User Added Successfully")
    }).catch(() => {
      console.log("Somthing went wrong");
    });
  } catch (err) {
    console.log(err);
  }
});



router.get("/login", (req, res) => {
  User.findOne({ email: req.params.email }, function getresult(errorvalue, result) {
    if (errorvalue) {
      reject({ status: false, msg: "Invaild Data" });
    }
    else {
      if (result != undefined && result != null) {
        var decrypted = encryptor.decrypt(result.password);
        if (decrypted == User.password) {
          resolve({ status: true, msg: "User Validated Successfully" });
        }
        else {
          reject({ status: false, msg: "User Validation failed" });
        }
      }
      else {
        reject({ status: false, msg: "Error!!!!" });
      }
    }
  })
});


module.exports = router;
