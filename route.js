const express=require('express');
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("backend is working");
})

router.use('/auth',require('./routes/authroutes'));

module.exports=router;