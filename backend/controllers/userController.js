import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js";


// @desc     Auth user & get token
// @route    POST / api/users/login
// @access   Public

const authUser = asyncHandler(async(req, res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id)

        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
            idAdmin: user.isAdmin
        })
    }else{
        res.status(401);
        throw new Error("Invalid email or password")
    }
})

// @desc     Register user
// @route    POST / api/users
// @access   Public

const registerUser = asyncHandler(async(req, res)=>{
    const {firstName, lastName, username, email, phoneNumber, gender, password} = req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        res.status(400);
        throw new Error("User already exists")
    }

    const user = await User.create({
        firstName, lastName, username, email, phoneNumber, gender, password
    })

    if(user){
        generateToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            phoneNumber: user.phoneNumber,
            idAdmin: user.isAdmin
        })
    }else{
        res.status(400);
        throw new Error("Invalid user data")
    }
})

// @desc     Logout user / clear cookie
// @route    POST / api/users/logout
// @access   Private

const logoutUser = asyncHandler(async(req, res)=>{
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({message: 'Logged out successfully'}) 
})

// @desc     Get user profile
// @route    GET / api/users/profile
// @access   Private

const getUserProfile = asyncHandler(async(req, res)=>{
    const user = await User.findById(req.user._id);

    if(user){
        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }else{
        res.status(404);
        throw new Error("User not found")
    }
})


// @desc     UPDATE user profile
// @route    PUT / api/users/logout
// @access   Private

const updateUserProfile = asyncHandler(async(req, res)=>{
    const user = await User.findById(req.user._id);

    if(user){
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;

        if(req.body.password){
            user.password = req.body.password
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin
        })
    }else{
        res.status(404)
        throw new Error("User not found: " + updatedUser)
    }
})

// @desc     Get users
// @route    GET / api/users
// @access   Private/Admin

const getUsers = asyncHandler(async(req, res)=>{
    res.send( 'get users');
})

// @desc     Get user by ID
// @route    GET / api/users/:id
// @access   Private/Admin

const getUserById = asyncHandler(async(req, res)=>{
    res.send( 'get user by Id');
})


// @desc     DELETE users
// @route    DELETE / api/users/:id
// @access   Private/Admin

const deleteUser = asyncHandler(async(req, res)=>{
    res.send( 'Delete users');
})


// @desc     UPDATE user
// @route    DELETE / api/users/:id
// @access   Private/Admin

const updateUser = asyncHandler(async(req, res)=>{
    res.send( 'Update users');
})


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser

}