import asyncHandler from "../middleware/asyncHandler.js";
import Lending from "../models/lendingModel.js"



//@desc     Fetch all borrwoings
//@route    GET / api/lendings
// @access  Private

const getLendings = asyncHandler(async (req, res) =>{
    const lendings = await Lending.find({})

    res.json(lendings)
})

export {getLendings}