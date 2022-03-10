const express=require("express");
const Router=require("express")
const userRouter=express.Router();
const userdata=require('../models/userdata');
var jwt=require("jsonwebtoken");
const check=require('../middleware/chech-auth');
var bcrypt=require("bcrypt")

userRouter.post('/register',function(req,res){
    console.log(" running")
    bcrypt.hash(req.body.password, 10, function(err, hash) {
       
   
    var item = {
        name: req.body.name,
        password:hash
       
    }
    var user=userdata(item);
    user.save().then((data)=>{
        console.log(data)
    })
});
})
userRouter.post('/login',(req,res)=>{
    var i = {
        name: req.body.name,
        password: req.body.password
    }
console.log("i"+JSON.stringify(i))
    var n = i.name;
     var p = i.password
    
    userdata.findOne({
        name:i.name
    }).then((demo)=>{
        console.log("demo"+demo)
        if (demo) {
           
     return bcrypt.compare(req.body.password,demo.password).then((result)=>{
         console.log("result"+result);
         if(result){
                var token=jwt.sign({name:demo.name},"key")           //generate token
                console.log(token)
                res.status(200).json({data:'true',token:token})
         }
         else{
            res.json({data:'password not found'})
            console.log("password not found")
         }
     })
     
    }else{
        res.json({data:'user not found'})
        console.log("user not found")
     }
})
    // }).catch(()=>
    // {res.status(400).json({data:'user not found'})})      
     
    
})
userRouter.get('/home',check,(req,res)=>{
let tokenName=req.userData.name;
console.log("tokenName"+tokenName);

res.status(200).json({data:tokenName})
})


module.exports=userRouter;