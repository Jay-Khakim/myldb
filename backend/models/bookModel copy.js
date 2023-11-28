import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    bookId:{
        type: String,
        unique: true
    },

    library: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Library'
    },

    title: {
        type: String,
        default: null,

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
        default: null,

    },

    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Publisher',
        default: ""
    },

    publicationYear: {
        type: Number,
        default: null,

    },

    edition: {
        type: String, 
        default: null,

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
        ref: 'Quote',
    }]


}, { timestamps: true });


const Book = mongoose.model("Book", bookSchema);

export default Book;