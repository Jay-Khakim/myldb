import mongoose from "mongoose";


const librarySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    libraryName: {
        type: String,
        required: true
    },

    booksNumber: {
        type: Number, 
        default: 0,
    },


}, { timestamps: true });

const Library = mongoose.model('Library', librarySchema);

export default Library;