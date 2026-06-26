import dotenv from "dotenv"
dotenv.config()
import express from "express"
import ConnectDB from "./config/ConnectDB.js"
import authRouter from "./Routes/auth.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRouter from "./Routes/user.route.js"

const app = express()

app.use(cookieParser())
app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


//APIs
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)

app.get("/" ,(req,res)=>{
    res.json("Hello from Server")
});

const port = process.env.PORT || 9000

app.listen(port , ()=>{
    console.log(`Server Started..... At ${port}`)
    ConnectDB()
})