import express from "express"
import cors from "cors"
import cooieparser from "cookie-parser" // browser ki coockies ko handle kre ke liye
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
        origin: process.env.CORS_ORIGIN,

    })) // cors use aata h access dene ke liye ki apni app kon kon dekh skta h

app.use(express.json({
        limit: "16kb"
    })) //express ko bta rhe h kon kon sa data lena h ab isme json file le skta h 

app.use(express.urlencoded({
        extended: true,
        limit: "16kb"

    })), // yeah configuration url ko encode krne ke liye kyi baar plus aata h kyi baar nhi aata url ke uncoder batata h


    app.use(express.static("public")) // public asset jo koi bhi acces kr ske majorly 3 cofiguration milte h
app.use(cookieParser())

// (err,req,res,next)

// routes
import userRouter from "./routes/user.routes.js"


// routes declaration
app.use("/api/v1/users", userRouter)


export { app }