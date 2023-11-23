import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    }
}, { timestamps: true });


const Author = mongoose.model("Author", authorSchema);

export default Author;


