const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken')
const User=require('../models/user')
const Audit=require('../models/audit')
const mongoose=require('mongoose');
// var MongoClient = require('mongoose').MongoClient;
db="mongodb+srv://meanapp:meanapp@cluster0.11gy6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(db,err=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("connected")
    }
});
// function verifytoken(req,res,next){
//     if(!req.Headers.Authorization){
//         return res.status(401).send("unauthorised")
//     }
//     let token=req.Headers.Authorization.split(' ')[1]
//     if(token === null){
//         return res.status(401).send("unauthorised")
//     }
//     let payload=jwt.verify(token,'rajesh')
//     if(!payload){
//         return res.status(401).send("unauthorised")
//     }
//     req.userdata=payload.subject
//     next()
// }
router.get('/get',(req,res)=>{
    User.find(function(err, apis) {

        if (err) return console.error(err);

        res.send(apis);

    });
})
router.get('/audit',(req,res)=>{
    Audit.find(function(err, apis) {

        if (err) return console.error(err);

        res.send(apis);

    });
})
router.post('/reg',(req,res)=>{
    const userdata=req.body;
    let user=new User(userdata)
   
       user.save((error,regisdata)=>{
        if(error){
            console.log("error")
        }
        else{
            let payload={subject:regisdata}
            let token=jwt.sign(payload,'rajesh')
            res.status(200).send({token:token})
        }
    })
})

router.post('/login',(req,res)=>{
    const userdata=req.body;
    User.findOne({email:userdata.email},(err,loindata)=>{
        if(err){
       console.log(err)
        }
        else{
            if(!loindata){
                res.send('invalid email')
            }
            else{
                if(loindata.password !== userdata.password){
                    res.status(401).send('wrong password')
                }
                else{
                    let payload={subject:loindata}
                    let token=jwt.sign(payload,'rajesh')
                    res.status(200).send([{token:token}])
                }
            }
        }
    })
})


module.exports=router