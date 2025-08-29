const cookieParser = require('cookie-parser');
const express=require('express');
const cors=require('cors');
const connectDB =require('./config/db');

const app=express();
const port=process.env.PORT || 5004;

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

connectDB();


app.use(express.json());
app.use(cookieParser());

app.use("/",require('./route'));

app.listen(port,()=>{
    console.log(`serevr is running at port http://localhost:${port}`);
})