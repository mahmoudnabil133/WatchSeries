const router = require('express').Router({mergeParams: true});
const Season = require('../models/season');
episodeRouter = require('./episodeRouter');
router.route('/')
    .get(async (req, res)=>{
        try{
            let filter = {}
            if (req.params.showId) {
                filter = {showId: req.params.showId}
            }
            console.log(filter)
            const seasons = await Season.find(filter)
            if (seasons.length == 0) throw new Error('No seasons founds');
            res.status(200).json({
                success: true,
                data: seasons
            })
        } catch (err) {
            res.status(400).json({
                success: false,
                msg: err.message
            })

        }
    });

router.route('/:seasonNumber')
    .get(async (req, res)=>{
        try{
            const {seasonNumber} = req.params;
            const season = await Season.findOne({showId: req.params.showId, season_number: seasonNumber});
            if (!season) throw new Error('no season with this number');
            res.status(200).json({
                success: true,
                data: season
            })
        } catch(err) {
            res.status(400).json({
                success: false,
                msg: err.message
            })
        }
    })
router.use('/:seasonId/episodes', episodeRouter)
module.exports = router;
