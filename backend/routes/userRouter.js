const express = require("express");
const User = require("../models/user");
const TvShows = require("../models/tvShow");
const userContraller = require("../contraller/userContraller");
const authContraller = require("../contraller/authContraller");
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

// 1) not protected routes
router.route('/login')
  .post(authContraller.login);
router.route('/signup')
  .post(authContraller.signUp);
router.route('/forgotPassword')
  .post(authContraller.forgotPassword);
router.route('/resetPassword/:token')
  .patch(authContraller.resetPassword);

router.route('/isAuthenticated')
  .post(authContraller.isAuth);

// 2) protected routes
router.use(authContraller.protect);

router.route('/getMe')
  .get(userContraller.getMe, userContraller.getOneUser);
router.route('/updateMe')
  .patch(userContraller.updateMe);
router.route('/deleteMe')
  .delete(userContraller.deleteMe);
router.route('/logout')
  .get(authContraller.logout)
router.route('/updateMyPassword')
  .patch(authContraller.updatePassword);

// 3) admin routes
router.use(authContraller.restrictTo('admin'));

router.route('/')
  .get(userContraller.getAllUsers);
router.route('/:id')
  .get(userContraller.getOneUser)
  .delete(userContraller.deleteUser)
  .patch(userContraller.updateUser);
module.exports = router;
