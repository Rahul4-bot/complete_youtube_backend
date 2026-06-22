// require {
//     'dotenv '
// }.config({ path: './env' })
import dotenv from "dotenv"
import mongoose from "mongoose";

import Connectiondb from "./dbconnect/Db.js";


dotenv.config({
    path: '/.env'
})



Connectiondb()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running at the port : ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("mongodb connection failed ", err)
    })















/*
import express from "express";
const app = express()
    (async() => {
        try {
            await mongoose.connect('$ { process.env.MONGODB_URI }/${DB_NAME}')
            app.on("error", (error) => {
                console.log("ERR:", error);
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log("App is listening on port $ {process.env.PORT}");
            })
        } catch (error) {
            console.error("ERROR", error);
        }
    })()*/