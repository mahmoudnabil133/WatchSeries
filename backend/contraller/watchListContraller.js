const User = require('../models/user');
const tvShow = require('../models/tvShow');

// git user watchlist
const getWatchList = async (req, res) =>{
    try{
        console.log('getwatchlist');
        const user = await User.findById(req.user.id).populate('watchList');
        if (!user){
            throw new Error('User not found');
        }
        const watchList = user.watchList;
        if (watchList.length === 0){
            throw new Error('Watchlist is empty');
        }
        res.status(200).json({
            success: true,
            result: watchList.length,
            data: watchList
        })

    }catch(err){
        console.log(err.message);
        res.status(500).json({
            success: false,
            msg: err.message
        })
    }
}

const addToWatchList = async (req, res) =>{
    try{
        const user = await User.findById(req.user.id);
        if(!user) throw new Error('User not found');
        const seriesId = req.body.seriesId;
        const series = await tvShow.findById(seriesId);
        
        if (!series) throw new Error('series not found');
        if (user.watchList.includes(seriesId)) throw new Error('series already in watchlist');

        user.watchList.push(seriesId);
        await user.save({validateBeforeSave: false});
        res.status(200).json({
            success: true,
            msg: 'Added to watchlist'
        })

    }catch(err) {
        res.status(500).json({
            success: false,
            msg: err.message
        })
    }
}

const removeFromWatchList = async(req, res) =>{
    try{
        const user = await User.findById(req.user.id);
        if (!user) throw new Error('User not found');
        const seriesId = req.params.id;
        const index = user.watchList.indexOf(seriesId);
        if (index === -1) throw new Error('series not found in watchlist');
        user.watchList.splice(index, 1);
        await user.save({validateBeforeSave: false});
        res.status(200).json({
            success: true,
            msg: 'Removed from watchlist'
        })

    }catch(err) {
        res.status(500).json({
            success: false,
            msg: err.message
        })
    }
}

module.exports = {
    getWatchList,
    addToWatchList,
    removeFromWatchList
}
