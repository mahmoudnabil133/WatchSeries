const Genre = require('../models/genres');
const router = require('express').Router();

router.route('/')
    .get(async (req, res)=>{
        try{
            const genres = await Genre.find()
            if (genres.length == 0) throw new Error('No genres founds');
            res.status(200).json({
                success: true,
                data: genres
            })
        } catch (err) {
            res.status(400).json({
                success: false,
                msg: err.message
            })

        }
    })
    router.route('/:id')
        .get(async (req, res)=>{
            try{
                const {id} = req.params;
                const genre = await Genre.findById(id);
                if (!genre) throw new Error('no genre with this id');
                res.status(200).json({
                    success: true,
                    data: genre
                })
            } catch(err) {
                res.status(400).json({
                    success: false,
                    msg: err.message
                })
            }
        })
module.exports = router;
