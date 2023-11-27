import mongoose from "mongoose";

const languageSchema = new mongoose.Schema({
    language: {
        type: String,
        required: true,
    },
}, { timestamps: true });


const language = mongoose.model("Language", languageSchema);

export default language;


