const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

router.route('/')
    .get(async (req, res)=>{
        try{
            const movies = await Movie.find()
            if (movies.length == 0) throw new Error('No movies founds');
            res.status(200).json({
                success: true,
                data: movies
            })
        } catch (err) {
            res.status(400).json({
                success: false,
                msg: err.message
            })

        }
    });
// add new movie
router.route('/')
    .post(async (req, res)=>{
        try{
            const newMovie = new Movie({
                title: req.body.title,
                year: req.body.year,
                rating: req.body.rating,
                actors: req.body.actors
            })
            await newMovie.save()
            res.status(200).json({
                success: true,
                data: newMovie
            })

        } catch(err) {
            res.status(400).json({
                success: false,
                msg: err.message
            })
        }
    });

// get movie by id
router.route('/:id')
    .get(async (req, res)=>{
        try{
            const {id} = req.params;
            const movie = await Movie.findById(id);
            if (!movie) throw new Error('no movie with this id');
            res.status(200).json({
                success: true,
                data: movie
            })
        } catch(err) {
            res.status(400).json({
                success: false,
                msg: err.message
            })
        }
    });


module.exports = router;
