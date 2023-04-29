import mongoose from "mongoose";
import asyncHandler from "express-async-handler"

export const dbConnect = asyncHandler(async () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("MongoDB: Database connection successfull")
    }).catch((error) => {
        throw new Error("MongoDB: Database connection failed")
    })
})