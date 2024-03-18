import express from "express"
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({path:'./env'})

const PORT = process.env.PORT;

connectDB()
.then(() =>{
    app.listen(PORT,()=>{
        console.log(`Server is listening on port ${PORT}`)
    })
})
.catch((err)=> {
    console.log("MONGODB connection failed!!!",err)
})



























/*
const app = express();
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("Error",error)
            throw(error)
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error:", error)
    }
})()
*/