import mongoose from "mongoose";

const locationOfBookSchema = new mongoose.Schema({
    locationOfBook: {
        type: String,
        required: true,
    },
}, { timestamps: true });


const LocationOfBook = mongoose.model("LocationOfBook", locationOfBookSchema);

export default LocationOfBook;


