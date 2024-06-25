// require('dotenv').config({path:'./env'}) 
// this will work but it disrupt the consitency of code so other approach

import dotenv from "mongoose"
import connectDB from "./db/index.js";


//2nd approach is we write code in db folder and import it and execute it in the index.js file
 dotenv.config({
    path:'./env'
 })

 connectDB()
 .then(()=> {
   app.listen(process.env.PORT || 8000, ()=> {
      console.log(`Server is running at port: ${process.env.PORT}`);
   })
 })
 .catch((err) => {
   console.log("MONGO db connection failed !!", err)
 })








// this is one way to write the code
// import express from "express"
// const app = express()

// (async () => { // we used ()(); this form because Execute the function immediately.
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         application.om("error",(error)=> {
//             console.log("ERROR: ",error)
//             throw error
//         })

//         app.listej(process.env.PORT, () => {
//             console.log(`App is listening on the port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw error
//     }
// })()