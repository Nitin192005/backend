import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN, //This option specifies which origin is allowed to access the resources.
// It is being set to process.env.CORS_ORIGIN, which means the allowed origin is specified as an environment variable. 
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"})) // urlencoded means that we decode the url present in the browser
// here we wrote extended true to handel nested object
app.use(express.static("public"))//their are many files and folder which we have to store so for that we are making a folder name public

app.use(cookieParser())

export {app}