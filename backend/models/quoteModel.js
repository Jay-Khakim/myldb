import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    book: {
        type: String,
        required: true
    },

    quote: {
        type: String,
        required: true
    },

    authorOfQoute: {
        type: String,
        required: true, 
        default: "Unknown"
    }
    

}, { timestamps: true });

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;