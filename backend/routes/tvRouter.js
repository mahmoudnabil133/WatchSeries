const express = require('express');
const router = express.Router();
const TvShow = require('../models/tvShow');
router.route('/')
    .get(async (req, res)=>{
        try{
            const page = parseInt(req.query.page) || 1;
            const pageSize = 5;
            const shows = await TvShow.find().skip(pageSize * (page - 1)).limit(pageSize);
            const docsCount = await TvShow.countDocuments()
            const totPages = Math.ceil(docsCount / pageSize);
            if (shows.length == 0) throw new Error('No shows founds');
            res.status(200).json({
                success: true,
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

// get movie by id
router.route('/:id')
    .get(async (req, res)=>{
        try{
            const {id} = req.params;
            console.log(id)
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


module.exports = router;
