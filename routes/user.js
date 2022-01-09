const router= require("express").Router()
const User=require("../models/User")
const bcrypt = require('bcrypt');


//update user
router.put("/:id",async (req,res)=>{
    if(req.body.userId===req.params.id||req.user.isAdmin){
if(req.body.password){
   try {const salt= await bcrypt.genSalt(10)
    req.body.password= await bcrypt.hash(eq.body.password,salt)}catch(err){
       return res.status(500).json(err) 
    }
}
try{
    const user= await User.findByIdAndUpdate(req.params.id,{
        $set:req.body,
    });
    res.status(200).json("Account has been updated")
}catch(err){
    return res.status(500).json(err);
}
    }else{
        return res.status(403).json("You can update only your account!")
    }
})
//delete user
router.delete("/:id",async (req,res)=>{
    if(req.body.userId===req.params.id||req.user.isAdmin){
if(req.body.password){
   try {const salt= await bcrypt.genSalt(10)
    req.body.password= await bcrypt.hash(eq.body.password,salt)}catch(err){
       return res.status(500).json(err) 
    }
}
try{
    const user= await User.findByIdAndUpdate(req.params.id,{
        $set:req.body,
    });
    res.status(200).json("Account has been updated")
}catch(err){
    return res.status(500).json(err);
}
    }else{
        return res.status(403).json("You can delete only your account!")
    }
})
//get a user
//get all users
//follow a user
//unfolow a user


module.exports=router