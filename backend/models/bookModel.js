import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    bookId:{
        type: String,
        required: true,
        unique: true
    },

    title: {
        type: String,
        required: true,
    },

    subTitle: {
        type: String,
        default: ''
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    },

    coverImage:{
        type: String,
        default: '',
    },

    isbn: {
        type: String,
        default: ''
    },

    pages: {
        type: Number, 
        required: true,
    },

    published: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Publisher'
    },

    publicationYear: {
        type: Number,
        required: true,
    },

    edition: {
        type: Number, 
        required: true,
    },

    language: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Language'
    },

    format: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'FormatOfBook'
    },

    genre: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Genre'
    }],

    currentLocation: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'LocationOfBook',
    },

    byWhom: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'ByWhom',
    },

    price: {
        type: Number,
        required: true,
        default: 0
    },

    quote: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Quote',
    }]


}, { timestamps: true });


const Book = mongoose.model("Book", bookSchema);

export default Book;