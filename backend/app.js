const express = require('express')
const connectDB = require('./config')
const movieRouter = require('./routes/movieRouter')
const tvRouter = require('./routes/tvRouter')
const PORT = 3000
const cors = require('cors')

app = express()
// build api for Movies
// get all movies
app.use(cors())
app.use(express.json())
app.use('/movies', movieRouter)
app.use('/shows', tvRouter)
app.listen(PORT, ()=>{
    console.log('server running on port 3000')
    connectDB()
})
