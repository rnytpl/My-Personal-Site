import express from "express"
import asyncHandler from "express-async-handler"
import { errorHandler } from "./middleware/errorHandler.js"

export const app = express()

const foo = { check: "stf" }

app.get("/error", asyncHandler(async (req, res) => {
    throw new Error("DAmn")
}))

app.use(errorHandler)