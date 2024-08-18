const express = require("express");
const User = require("../models/user");
const TvShows = require("../models/tvShow");
const router = express.Router();

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

module.exports = router;
