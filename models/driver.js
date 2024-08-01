import mongoose from "mongoose";

const driverSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: [true, "Driver name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Driver email is required"],
        trim: true,
    },
    licenseNumber: {
        type: String,
        required: [true, "License number is required"],
        trim: true,
    },
    licenseImg: {
        type: String,
        required: [true, "License image is required"],
       
    },
    isVerified: {
        type: Boolean,
        default: false
    },
});

export default mongoose.model("Driver", driverSchema);
