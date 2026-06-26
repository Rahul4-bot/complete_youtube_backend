import mongoose from "mongoose"
import express from "express";

import { DB_NAME } from "../constants.js";
const Connectiondb = async() => {
    try {
        const connection = mongoose.connect(`${process.env.MONGODB_URI}
                /${DB_NAME}`)
        console.log('\n mongodb connected !! DB HOST:${connectionInstance.connection.host}')
    } catch (error) {
        console.log("connection error", error);
        process.exit(1);
    }
}

export default Connectiondb()
    .then(() => {
        app.listen(process.env.port || 8000, () => {
            console.log("server is running on port: ${process.env.PORT}");
        })
    })
    .catch((err) => {
        console.log("MONGO DB CONNECTION FAILED !!! ", err);
    })