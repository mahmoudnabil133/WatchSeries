const mongoose = require('mongoose');
const episodeSchema = new mongoose.Schema({
    air_date: {
        type: String,
        required: true
    },
    crew: {
        type: Array,
        required: true
    },
    episode_number: {
        type: Number,
        required: true
    },
    guest_stars: {
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
    id: {
        type: Number,
        required: true
    },
    production_code: {
        type: String,
        required: true
    },
    runtime: {
        type: Number,
        required: true
    },
    season_number: {
        type: Number,
        required: true
    },
    still_path: {
        type: String,
        required: true
    },
    vote_average: {
        type: Number,
        required: true
    },
    vote_count: {
        type: Number,
        required: true
    },
    seasonId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Episode', episodeSchema);
