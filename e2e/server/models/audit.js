const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    name:String,
    empid:String,
    technology:String,
    date:String
})
module.exports=mongoose.model('Audituser',userSchema,'audit');