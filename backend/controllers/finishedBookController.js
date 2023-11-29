import asyncHandler from "../middleware/asyncHandler.js";
import FinishedBook from "../models/finishedBookModel.js"



//@desc     Fetch all borrwoings
//@route    GET / api/finishedBooks
// @access  Private

const getFinishedBooks = asyncHandler(async (req, res) =>{
    const finishedBooks = await FinishedBook.find({})

    res.json(finishedBooks)
})

export {getFinishedBooks}