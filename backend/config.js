const mongoose = require('mongoose');

MONGO_URI = 'mongodb+srv://hoda:1234@cluster0.bp3s9ei.mongodb.net/ITI_DB?retryWrites=true&w=majority&appName=Cluster0'
const connectDB = () => {
    mongoose.connect(MONGO_URI)
    .then(()=> console.log('connected to database'))
    .catch(()=> console.log('connection failed'))
}

module.exports = connectDB;
