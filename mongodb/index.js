const express =require("express");
const app= express();
const mongoose=require('mongoose');
const ExpressError=require('./ExpressError');
main()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
.then(()=>{
  console.log("connected database project successfully");
})
.catch((err)=>{
    console.log(err);
});
async function  main(){
    await mongoose.connect("mongodb://localhost:27017/hello");
};
const schema = new mongoose.Schema({
    from:{
        type:String
    }
});
const model= mongoose.model("model",schema);
let model1= new model({
    from:'sathwik'
});
model1.save()
.then((res)=>{
    console.log(res);
});
function asyncwrap(fn){
 return function(res,req,next){
    fn(req,res,next).catch((err)=>next(err));

 }
}
app.get("/", asyncwrap(async(req,res,err,next)=>{
    let chat = await model.find({});
    res.send("error");
    next(err);
}));
const handletypeerror=(err)=>{
   console.log("some type error");
   console.dir(err.message);
   return err;
}
app.use((err,req,res,next)=>{
    let {status=200,message="connection successful"}=err;
    res.status(status).send(message);
    if (err.name=="TypeError"){
        err=handletypeerror(err);
    }
    next(err);
});
app.use((req,res)=>{
    res.send("Page not found!");
});
app.listen(8080,()=>{
    console.log('server listening at 8080');
});
