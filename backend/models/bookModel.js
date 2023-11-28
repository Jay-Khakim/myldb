import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // },

    bookId:{
        type: String,
        default: "",
    },

    title: {
        type: String,
        default: "",

    },

    subTitle: {
        type: String,
        default: ''
    },

    author: {
        type: String,
        default: ''
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
        type: String,
        default: ''
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
        type: String,
        default: ''
    },

    format: {
        type: String,
        default: ''
    },

    genre: [{
        type: String,
        default: ''
    }],

    currentLocation: {
        type: String,
        default: ''
    },

    byWhom: {
        type: String,
        default: ''
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