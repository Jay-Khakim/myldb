import asyncHandler from "../middleware/asyncHandler.js";
import Author from "../models/authorModel.js"

//@desc     Fetch all quotes
//@route    GET / api/quotes
// @access  Private

const getAuthors = asyncHandler(async (req, res) =>{
    const authors = await Author.find({})

    res.json(authors)
})

export {getAuthors}