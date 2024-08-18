const mongoose = require('mongoose');
const seasonSchema = new mongoose.Schema({
    air_date: {
        type: String,
        required: true
    },
    episodes: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    id:{
        type: Number,
        required: true
    },
    poster_path: {
        type: String,
        required: true
    },
    season_number:{
        type: Number,
        required: true
    },
    vote_average: {
        type: Number,
        required: true
    },
    showId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Season', seasonSchema);
