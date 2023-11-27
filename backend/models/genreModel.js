import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
    genre: {
        type: String,
        required: true,
    },
    
}, { timestamps: true });


const genre = mongoose.model("Genre", genreSchema);

export default genre;


