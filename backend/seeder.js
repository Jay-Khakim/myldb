import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import quotes from "./data/quotes.js";
import author from "./data/author.js";
import books from "./data/books.js";
import byWhoms from "./data/byWhoms.js"
import formatOfBooks from "./data/formatOfBooks.js"
import genres from "./data/genres.js"
import languages from "./data/languages.js";
import libraries from "./data/libraries.js"
import locationOfBooks from "./data/locationOfBooks.js";
import publishers from "./data/publishers.js";
import borrowings from "./data/borrowings.js";
import lendings from "./data/lendings.js";
import finishedBooks from "./data/finishedBooks.js";
import User from "./models/userModel.js";
import Quote from "./models/quoteModel.js";
import Author from "./models/authorModel.js";
import Book from "./models/bookModel.js";
import ByWhom from "./models/byWhomModel.js"
import FormatOfBook from "./models/formatOfBookModel.js"
import Genre from "./models/genreModel.js"
import Language from "./models/languageModel.js"
import Library from "./models/libraryModel.js"
import LocationOfBook from "./models/locationOfBookModel.js"
import Publisher from "./models/publisherModel.js";
import Borrowings from "./models/borrowingsModel.js";
import FinishedBook from "./models/finishedBookModel.js"
import Lending from "./models/lendingModel.js"
import connectDB from "./config/db.js"


dotenv.config();

connectDB();

const importData = async()=>{
    try {
        await User.deleteMany(); //
        await Book.deleteMany(); //
        await Quote.deleteMany(); //
        await Author.deleteMany(); //
        await ByWhom.deleteMany(); //
        await FormatOfBook.deleteMany(); //
        await Genre.deleteMany(); //
        await Language.deleteMany(); //
        await Library.deleteMany(); //
        await LocationOfBook.deleteMany(); //
        await Publisher.deleteMany(); //
        await Borrowings.deleteMany(); //
        await FinishedBook.deleteMany(); //
        await Lending.deleteMany(); //


        const createUsers = await User.insertMany(users);
        console.log("Users created successfully")
        const createAuthor = await Author.insertMany(author);
        console.log("Authors created successfully")

        const createPublisher = await Publisher.insertMany(publishers);
        console.log("Publishers created successfully")

        const createLanguage = await Language.insertMany(languages);
        console.log("Language created successfully")

        const createGenre = await Genre.insertMany(genres);
        console.log("Genres created successfully")

        const createFormatOfBook = await FormatOfBook.insertMany(formatOfBooks);
        console.log("Format of book created successfully")

        const createLocationOfBook = await LocationOfBook.insertMany(locationOfBooks);
        console.log("Location of book created successfully")

        const createByWhom = await ByWhom.insertMany(byWhoms);
        console.log("byWhom  of book created successfully")

        const adminUser = createUsers[0]._id;
        const sampleQuotes = quotes.map((quote)=>{
            return {...quote, user: adminUser}
        })
        const createQuote = await Quote.insertMany(sampleQuotes);
        console.log("Quotes created successfully")


        const authorName = createAuthor[0]._id;
        const publisherName = createPublisher[0]._id;
        const languageName = createLanguage[0]._id;
        const genreName = createGenre[0]._id;
        const formatOfBookName = createFormatOfBook[0]._id;
        const locationOfBookName = createLocationOfBook[0]._id;
        const byWhomName = createByWhom[0]._id;
        const quoteName = createQuote[0]._id;
        
        const sampleLibrary = libraries.map((library)=>{
            return {...library, user: adminUser}
        })
        const createLibrary = await Library.insertMany(sampleLibrary);
        console.log("Library created successfully")

        const libraryName = createLibrary[0]._id

        const sampleBooks = books.map((book)=>{
            return {...book, user: adminUser, library: libraryName, author: authorName, publisher: publisherName, language: languageName, format: formatOfBookName, genre: genreName,   currentLocation: locationOfBookName, byWhom: byWhomName, quote: quoteName  };
        })
        console.log("Sample books created successfully")

        
        const createBook = await Book.insertMany(sampleBooks);
        console.log("Books created successfully")
        
        

        await Borrowings.insertMany(borrowings);
        console.log("Borrowings created successfully")
        
        const bookName = createBook[0]._id;

        const smapleLendings = lendings.map((lending)=>{
            return{...lending, bookId: bookName}
        })
        await Lending.insertMany(smapleLendings);
        console.log("Lendings created successfully")

        const smapleFinishedBook = finishedBooks.map((finishedBook)=>{
            return{...finishedBook, user: adminUser, book: bookName, format: formatOfBookName}
        })
        await FinishedBook.insertMany(smapleFinishedBook);
        console.log("Finished books created successfully")

        console.log("Data imported!".green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData= async()=>{
    try {
        await User.deleteMany(); //
        await Book.deleteMany(); //
        await Quote.deleteMany(); //
        await Author.deleteMany(); //
        await ByWhom.deleteMany(); //
        await FormatOfBook.deleteMany(); //
        await Genre.deleteMany(); //
        await Language.deleteMany(); //
        await Library.deleteMany(); //
        await LocationOfBook.deleteMany(); //
        await Publisher.deleteMany(); //
        await Borrowings.deleteMany(); //
        await FinishedBook.deleteMany(); //
        await Lending.deleteMany(); //

        console.log('Data destroyed! '.red.inverse)
        process.exit();
    } catch (error) {
        console.error(`${error.message}.red.inverse`);
        process.exit(1);
    }
}

if (process.argv[2] === '-d'){
    destroyData();
}else{
    importData();
}
