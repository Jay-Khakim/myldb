import mongoose from "mongoose";


const finishedBookSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    book: {
        type: mongoose.Schema.Types.ObjectId,
        default: "",
        ref: 'Book'
    },

    format: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'FormatOfBook'
    },

    finishedBookName: {
        type: String,
        required: true
    },

    finishedDate:{
        type: Date,
        required: true
    },

    pages: {
        type: String,
        default: 0,
    },

    hoursLong: {
        type: String,
        default: "0 hours"
    }

    


}, { timestamps: true });

const FinishedBook = mongoose.model('FinishedBook', finishedBookSchema);

export default FinishedBook;