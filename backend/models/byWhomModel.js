import mongoose from "mongoose";

const byWhomSchema = new mongoose.Schema({
    byWhom: {
        type: String,
        required: true,
    },
    
}, { timestamps: true });


const ByWhom = mongoose.model("ByWhom", byWhomSchema);

export default ByWhom;