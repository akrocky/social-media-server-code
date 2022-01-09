const express= require("express");
const app =express()
const mongoose= require("mongoose");
const dotenv=require("dotenv");
const morgan=require("morgan");
const  helmet=require("helmet");
const userRoute=require("./routes/user")
const authRoute=require("./routes/auth")

dotenv.config();
mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("connected to mongo db");
})
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.get("/",(req,res)=>{
res.json("wellcome to homepage")
})


app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)

app.listen(process.env.PORT||5000,()=>{
    console.log("backhand server is running");
})