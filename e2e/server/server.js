const express=require('express');
const bodyparser=require('body-parser');
const api=require('./router/api')
const cors=require('cors');
const port=4000;
const app=express();
app.use(cors())
app.use(bodyparser.json());
app.use('/api',api)
app.get('/',(req,res)=>{
    res.send("helo gopal your selected")
})
app.listen(port,()=>{
    console.log("server start")
})
