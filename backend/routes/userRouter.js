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

//register new user
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});



router.get("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ token });

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }

});

module.exports = router;
