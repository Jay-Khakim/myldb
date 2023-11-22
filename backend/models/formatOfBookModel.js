import mongoose from "mongoose";

const formatOfBookSchema = new mongoose.Schema({
    formatOfBook: {
        type: String,
        required: true,
    },
}, { timestamps: true });


const FormatOfBook = mongoose.model("FormatOfBook", formatOfBookSchema);

export default FormatOfBook;


