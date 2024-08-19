const express = require('express');
const router = express.Router();
const TvShow = require('../models/tvShow');
const seasonRouter = require('./seasonRouter');
router.route('/')
    .get(async (req, res)=>{
        try{
            const page = parseInt(req.query.page) || 1;
            const pageSize = 20;
            let query = {};
            console.log('sasasaapsla,sla,')
            if (req.query.name) {
                // user rgex to search for name
                query.name = new RegExp(req.query.name, 'i');
            }
            // how to get series if one genre queried in genres_id
            if (req.query.genre) {
                if (req.query.genre.includes(',')) {
                    console.log('s')
                    const genre_ids = req.query.genre.split(',').map(genre =>parseInt(genre));
                    query.genre_ids = { $all: genre_ids};
                } else{
                    query.genre_ids = parseInt(req.query.genre);
                }
            }
            if (req.query.adult) {
                query.adult = req.query.adult;
            }
            if (req.query.language) {
                query.original_language = req.query.language;
            }
            if (req.query.vote_average){
                query.vote_average = { $gte: req.query.vote_average};
            }
            if (req.query.popularity){
                query.popularity = { $gte: req.query.popularity};
            }
            console.log(query)
            const shows = await TvShow.find(query).skip(pageSize * (page - 1)).limit(pageSize);
            const docsCount = await TvShow.countDocuments()
            const totPages = Math.ceil(docsCount / pageSize);
            if (shows.length == 0) throw new Error('No shows founds');
            res.status(200).json({
                success: true,
                result: shows.length,
                data: shows,
                page: page,
                total_pages: totPages

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
            const newShow = new TvShow({
                adult: req.body.adult,
                backdrop_path: req.body.backdrop_path,
                genre_ids: req.body.genre_ids,
                id: req.body.id,
                origin_country: req.body.origin_country,
                original_language: req.body.original_language,
                original_name: req.body.original_name,
                overview: req.body.overview,
                popularity: req.body.popularity,
                poster_path: req.body.poster_path,
                first_air_date: req.body.first_air_date,
                name: req.body.name,
                vote_average: req.body.vote_average,
                vote_count: req.body.vote_count
            })
            await newShow.save()
            res.status(200).json({
                success: true,
                data: newShow
            })

        } catch(err) {
            res.status(400).json({
                success: false,
                msg: err.message
            })
        }
    });

// get series by id
router.route('/:id')
    .get(async (req, res)=>{
        try{
            const {id} = req.params;
            console.log('sasasasas')
            const show = await TvShow.findById(id);
            if (!show) throw new Error('no show with this id');
            res.status(200).json({
                success: true,
                data: show
            })
        } catch(err) {
            res.status(400).json({
                success: false,
                msg: err.message
            })
        }
    });

router.use('/:showId/seasons', seasonRouter);
module.exports = router;
