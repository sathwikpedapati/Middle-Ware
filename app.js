const express=require("express");
const app=express();
const Expresserror=require("./Expresserror");
// middle ware function stucked at this level
const check= (req,res,next)=>{
    let{token}=req.query;
    if(token==="dataaccess"){
        next();
    }
    throw new Expresserror(401,"Access Denied");
};
app.get("/api",check,(req,res)=>{
    res.send("data");
});
// app.use("/",(req,res,next)=>{
//     console.log("something not found");
//     next();
// });
app.get("/",(req,res)=>{
    res.send("hello");
});
app.get("/random",(req,res)=>{
     res.send("random sampling");
}); 
// logger information
app.use((req,res,next)=>{
    req.time=new Date(Date.now().toString());
    console.log(req.method,req.path,req.hostname,req.time);
    console.log("middleware function");
    next();
});
app.get("/err",(req,res)=>{
    abcd=abcd;
});
app.get("/admin",(req,res)=>{
    throw new Expresserror(403,'forbidden error');
})
app.use((err,req,res,next)=>{
    let{status,message}=err;
    res.status(status=403).send(message=`forbidden error ${status}`);

});
// app.use((err,req,res,next)=>{
//     console.log("2nd error");
//     next(err);
// });
// 404 (page not found)
app.use((req,res)=>{
  res.send("Page not found!");
});
app.listen(8080,()=>{
    console.log("server listening at port 8080");
});