import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import quotes from "./data/quotes.js";
import books from "./data/books.js";
import borrowings from "./data/borrowings.js";
import lendings from "./data/lendings.js";
import finishedBooks from "./data/finishedBooks.js";
import User from "./models/userModel.js";
import Quote from "./models/quoteModel.js";
import Book from "./models/bookModel.js";
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
        await Borrowings.deleteMany(); //
        await FinishedBook.deleteMany(); //
        await Lending.deleteMany(); //



        const createUsers = await User.insertMany(users);
        console.log("Users created successfully")

        const adminUser = createUsers[0]._id;
        const sampleQuotes = quotes.map((quote)=>{
            return {...quote, user: adminUser}
        })
        const createQuote = await Quote.insertMany(sampleQuotes);
        console.log("Quotes created successfully")

        const quoteName = createQuote[0]._id;



        const sampleBooks = books.map((book)=>{
            return {...book, user: adminUser, quote: quoteName  };
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
            return{...finishedBook, user: adminUser, book: bookName}
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
