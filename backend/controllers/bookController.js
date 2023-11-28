import asyncHandler from '../middleware/asyncHandler.js'
import Book from '../models/bookModel.js';
import language from '../models/languageModel.js';
import FormatOfBook from '../models/formatOfBookModel.js';
import ByWhom from '../models/byWhomModel.js';
import genre from '../models/genreModel.js';
//@desc     Fetch all books
//@route    GET / api/books
// @access  Public
const getBooks = asyncHandler(async (req, res) =>{
    const books = await Book.find({})
        .populate('user', 'firstName')
        // .populate('genre', 'genre', genre)
        // .populate('language', 'language', language)
        // .populate('format', 'formatOfBook', FormatOfBook)
        // .populate('byWhom', 'byWhom', ByWhom)
    res.json(books)
})


//@desc     Fetch a book
//@route    GET / api/books/:id
// @access  Public
const getBookById = asyncHandler(async (req, res) =>{
    const book = await Book.findById(req.params.id);

        if (book){
            return res.json(book);
        }else{
            response.status(404);
            throw new Error('Resource not found');
        }
})

const addBook = asyncHandler(async (req, res) =>{
    const {user, bookId, liblary, title, subTitle, author, coverImage, isbn, pages,  publisher, publicationYear, edition, language, format, genre, currentLocation,byWhom, price, quote} = req.body;

    const bookExists = await Book.findOne({bookId});

    if(bookExists){
        res.status(400);
        throw new Error(`Book with id= ${bookId} is already exists`)
    }

    const book = await Book.create({
        user, bookId, liblary, title, subTitle, author, coverImage, isbn, pages,  publisher, publicationYear, edition, language, format, genre, currentLocation,byWhom, price, quote
    })

    if(book){

        res.status(201).json("Book added successfully")
    }else{
        res.status(400);
        throw new Error("Invalid book data")
    }

    // const book = new Book({
    //     name: 'Sample name',
    //     price: 0,
    //     user: req.user.id,
    //     image: '/images/sample.jpg',
    //     brand: 'Sample brand',
    //     category: 'Sample category',
    //     countInStock: 0,
    //     numReviews: 0,
    //     description: 'Sample description',
    // })

    // const addedBook = await book.save()
    // res.status(201).json(addedBook)
})




export {getBooks, getBookById, addBook}