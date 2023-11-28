import asyncHandler from "../middleware/asyncHandler.js";
import Quote from "../models/quoteModel.js"


//@desc     Fetch all quotes
//@route    GET / api/quotes
// @access  Private

const getQuotes = asyncHandler(async (req, res) =>{
    const quotes = await Quote.find({})

    res.json(quotes)
})

export {getQuotes}