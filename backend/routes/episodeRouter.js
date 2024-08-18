const Episode = require('../models/episode');
const router = require('express').Router({mergeParams: true});

router.route('/')
    .get(async (req, res)=>{
        try{
            let filter = {}
            if (req.params.seasonId) {
                filter = {seasonId: req.params.seasonId}
            }
            const episodes = await Episode.find(filter);
            if (episodes.length == 0) throw new Error('No episodes founds');
            res.status(200).json({
                success: true,
                data: episodes
            })

        } catch(err){
            res.status(400).json({
                success: false,
                msg: err.message
            })
        }
    })

router.route('/:episodeNumber')
    .get(async (req, res) =>{
        try{
            const episode = await Episode.findOne({seasonId: req.params.seasonId, episode_number: req.params.episodeNumber});
            if (!episode) throw new Error('no episode with this number');
            res.status(200).json({
                success: true,
                data: episode
            })
        } catch(err) {
            res.status(400).json({
                success: false,
                msg: err.message
            })
        }
    })

module.exports = router;
