import mongoose from "mongoose";

const languageSchema = new mongoose.Schema({
    language: {
        type: String,
        required: true,
    },
}, { timestamps: true });


const Language = mongoose.model("Language", languageSchema);

export default Language;


