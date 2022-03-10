
const express=require("express");
const cors=require("cors")
const app=express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))       
// middlware function 

const userRouter=require('./src/routes/user');
app.use('/',userRouter)    //connect router
app.listen(5000, function() {
    console.log("server is running")
})