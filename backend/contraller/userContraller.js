const User = require('../models/user')

const filterObject = (obj, ...allowedObjects) =>{
    const newObj = {};
    Object.keys(obj).forEach(el=>{
        if (allowedObjects.includes(el)) newObj[el] = obj[el];
    });
    return newObj;
}
const getAllUsers = async (req, res)=>{
    try {
        const users = await User.find();
        if (!users) throw new Error('No users found');
        res.status(200).json({
            success: true,
            msg: 'users found',
            length: users.length,
            data: users
        })
    } catch(err){
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
}
const getOneUser = async(req, res)=>{
    try{
        const { id } = req.params
        const user = await User.findById(id);
        if (!user) throw new Error('user not found');
        res.status(200).json({
            success: true,
            msg:'user found',
            data: user
        })

    } catch(err){
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
}
const updateUser = async(req, res)=>{
    try{
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body, {new: true});
        if (!user) throw new Error('user not found');
        res.status(201).json({
            success: true,
            msg: 'user updated',
            data: user
        })
    }catch(err){
        res.status(400).json({
            success: true,
            msg: err.message
        })
    }
}
const deleteUser = async(req, res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) throw new Error('user not found')

    } catch(err){
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};

// this routes is allowed after login
const getMe = async(req, res, next)=>{
    req.params.id = req.user.id;
    next();
};

const updateMe = async(req, res)=>{
    try{
        if (req.body.password || req.body.confirmPassword) {
            throw new Error('this route is not for password update please use /updateMyPassword')
        }
        console.log(req.body)
        const filteredObj = filterObject(req.body, 'userName', 'email');
        const user = await User.findByIdAndUpdate(req.user.id, filteredObj,
            {new:true, runValidatord: true});
        res.status(200).json({
            success: true,
            msg: 'user updated',
            data: user
        })
    }catch(err){
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
};

const deleteMe = async(req, res)=>{
    try {
        await User.findByIdAndUpdate(req.user.id, {active: false});
        res.status(204).json({
            success: true,
            msg: 'user deleted'
        })
    }catch(err){
        res.status(400).json({
            success: false,
            msg: err.message
        })
    }
}
module.exports = {
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    getMe,
    updateMe,
    deleteMe
}
