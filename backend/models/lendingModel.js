import mongoose from "mongoose";

const lendingSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    bookId: {
        // type: mongoose.Schema.Types.ObjectId,
        // required: true,
        // ref: 'Book'
        type: String,
        required: true
    },

    whoTook: {
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

const Lending = mongoose.model('Lending', lendingSchema);

export default Lending;