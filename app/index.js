var express=require("express");
var app=express();
app.get("/",function(req,res){
    res.send("Hello <b>World</b>");
});
app.listen(3000, function(){
    console.log("Server started")
});

app.get("/test",function(req,res){
    res.send("This is a page");
});

app.get("/profile",function(req,res){
    res.send("This is profile page");
});