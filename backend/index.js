import dotenv from "dotenv"
dotenv.config()
import { app } from "./app.js"
import http from "http"
import { dbConnect } from "./db/mongoDb.js"
import express from "express"
import cluster from "cluster"

const PORT = process.env.PORT;

const server = http.createServer(app)
const startServer = async () => {
    dbConnect()
}


server.listen(PORT, console.log(`Server is listening on port ${PORT}`))