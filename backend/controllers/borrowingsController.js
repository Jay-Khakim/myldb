import asyncHandler from "../middleware/asyncHandler.js";
import Borrowings from "../models/borrowingsModel.js"



//@desc     Fetch all borrwoings
//@route    GET / api/borrowings
// @access  Private

const getBorrowings = asyncHandler(async (req, res) =>{
    const borrowings = await Borrowings.find({})

    res.json(borrowings)
})

export {getBorrowings}