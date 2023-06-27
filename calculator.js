const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.listen(3000,function(){
console.log("j");
});
app.use(bodyParser.urlencoded({extended :true}));
app.post("/",function(req,res)
{
    var x=Number(req.body.num1);
    var y=Number(req.body.num2);
    var result=x+y;

    res.send("result"+result)
});