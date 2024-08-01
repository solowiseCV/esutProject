import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: [true, "A user already exists with the same username"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: [true, "A user already exists with the same email"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,

    }
});

export default mongoose.model("User", userSchema);
