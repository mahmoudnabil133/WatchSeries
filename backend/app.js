const express = require('express')
const connectDB = require('./config')
const movieRouter = require('./routes/movieRouter')
const tvRouter = require('./routes/tvRouter')
const seasonRouter = require('./routes/seasonRouter')
const episodeRouter = require('./routes/episodeRouter')
const PORT = 3000
const cors = require('cors')

app = express()
// build api for Movies
// get all movies
app.use(cors())
app.use(express.json())
app.use('/movies', movieRouter)
app.use('/shows', tvRouter)
app.use('/seasons', seasonRouter)
app.use('/episodes', episodeRouter)
app.listen(PORT, ()=>{
    console.log('server running on port 3000')
    connectDB()
})
