const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const connectDB = require("./config");
const tvRouter = require("./routes/tvRouter");
const seasonRouter = require("./routes/seasonRouter");
const episodeRouter = require("./routes/episodeRouter");
const userRouter = require("./routes/userRouter");;
const genresRouter = require('./routes/genresRouter');
const PORT = 3000;
const cors = require("cors");

app = express();
// build api for Movies
// get all movies
app.use(cors());
app.use(express.json());
app.use("/shows", tvRouter);
app.use("/seasons", seasonRouter);
app.use("/episodes", episodeRouter);
app.use("/users", userRouter);
app.use('/genres', genresRouter);
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  connectDB();
});
