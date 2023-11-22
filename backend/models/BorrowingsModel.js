import mongoose from "mongoose";

const borrowingsSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    whomBorrowed: {
        type: String,
        required: true
    },

    takingDate: {
        type: Date,
        required: true
    },

    returnedDate: {
        type: Date,
        default: '',
    },

    
    

}, { timestamps: true });

const Borrowings = mongoose.model('Borrowings', borrowingsSchema);

export default Borrowings;