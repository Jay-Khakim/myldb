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
        // .populate('user', 'firstName')
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


//@desc     Add a book
//@route    GET / api/books/
//@access   Private
const addBook = asyncHandler(async (req, res) =>{
    const { bookId, liblary, title, subTitle, author, coverImage, isbn, pages,  publisher, publicationYear, edition, language, format, genre, currentLocation, byWhom, price } = req.body;

    const bookExists = await Book.findOne({bookId});

    if(bookExists){
        res.status(400);
        throw new Error(`Book with id= ${bookId} is already exists`)
    }

    const book = await Book.create({
         bookId, liblary, title, subTitle, author, coverImage, isbn, pages,  publisher, publicationYear, edition, language, format, genre, currentLocation, byWhom, price 
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

//@desc     Delete a book
//@route    DELETE /api/books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) =>{

    const book = await Book.findById(req.params.id);
    if(book){
        await Book.deleteOne({_id: book._id})
        res.status(200).json({message: 'Book deleted successfully'})
    }else{
        res.status(404)
        throw new Error('Resource not found')
    }
})

//@desc     Update a book
//@route    PUT / api/books/:id
// @access  Private
const updateBook = asyncHandler(async (req, res) =>{
    const { bookID, title, subTitle, author, coverImage, isbn, pages,  publisher, publicationYear, edition, language, format, genre, currentLocation, byWhom, price}=req.body;
    const book = await Book.findById(bookID);
    
    if(book){
        // book.bookId = bookId;
        book.title = title;
        book.subTitle = subTitle;
        book.author = author;
        book.coverImage = coverImage;
        book.isbn = isbn;
        book.pages = pages;
        book.publisher = publisher;
        book.publicationYear = publicationYear;
        book.edition = edition;
        book.language = language;
        book.format = format;
        book.genre = genre;
        book.currentLocation = currentLocation;
        book.byWhom = byWhom;
        book.price = price;

        const updateBook = await book.save();
        res.json(updateBook);

    }else{
        res.status(404)
        throw new Error('Resource not found')
    }
})




export {getBooks, getBookById, addBook, deleteBook, updateBook}