import mongoose from "mongoose";

const publisherSchema = new mongoose.Schema({
    publisherName: {
        type: String,
        default: '',
    },
    location: {
        type: String,
        default: '',
    }
}, { timestamps: true });


const Publisher = mongoose.model("Publisher", publisherSchema);

export default Publisher;


