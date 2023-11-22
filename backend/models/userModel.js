import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: null,
    },
    lastName: {
        type: String,
        default: null,

    },
    username: {
        type: String,
        required: true
    },
    
    gender: {
        type: String,
        default: null,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phoneNumber: {
        type: Number,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    },


},{
    timestamps: true,
});


userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const user = mongoose.model("User", userSchema);

export default user;