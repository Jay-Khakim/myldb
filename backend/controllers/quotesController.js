import asyncHandler from "../middleware/asyncHandler.js";
import Quote from "../models/quoteModel.js"


//@desc     Fetch all quotes
//@route    GET / api/quotes
// @access  Private

const getQuotes = asyncHandler(async (req, res) =>{
    const quotes = await Quote.find({})

    res.json(quotes)
})

//@desc     Add a book
//@route    GET / api/books/
//@access   Private

const addQuote = asyncHandler(async (req, res) =>{
    const {user, quoteText: quote, book, authorOfQoute  } = req.body;
    
    console.log(quote)
    const quoteExists = await Quote.findOne({quote});

    if(quoteExists){
        res.status(400);
        throw new Error(`Quote with text= ${quote} is already exists`)
    }

    const quoteNew = await Quote.create({user, quote, book, authorOfQoute})

    if(quoteNew){

        res.status(201).json("Quote added successfully")
    }else{
        res.status(400);
        throw new Error("Invalid quote data")
    }
})

//@desc     Delete a quote
//@route    DELETE /api/quotes/:id
// @access  Private
const deleteQuote = asyncHandler(async (req, res) =>{

    const quote = await Quote.findById(req.params.id);
    if(quote){
        await Quote.deleteOne({_id: quote._id})
        res.status(200).json({message: 'Quote deleted successfully'})
    }else{
        res.status(404)
        throw new Error('Resource not found')
    }
})

export {getQuotes, addQuote, deleteQuote}