var http = require('http');
var express=require("express");
var app=express();

app.use(express.static('.')) //ponit to CSS/JS folder

app.get("/",function(req,res){
    res.sendFile(__dirname + '/index.html');
    console.log(__dirname);
});

app.get("/test",function(req,res){
    res.send("This is a page");
});

app.listen(3000, function(){
    console.log("Server started");
});

