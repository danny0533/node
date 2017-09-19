var http = require('http');
var express=require("express");
var app=express();
var bodyParser = require('body-parser')

app.use(express.static('.')) //ponit to CSS/JS folder
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/",function(req,res){
    res.sendFile(__dirname + '/index.html');
    console.log(__dirname);
});

app.get("/home",function(req,res){
    res.sendFile(__dirname + '/home.html');
    console.log(__dirname);
});

app.post("/sendform",function(req,res){
    res.send(req.body.bike + "//" + req.body.country);
});

app.get("/ajax",function(req,res){
    res.send("hello");
});

app.listen(3000, function(){
    console.log("Server started");
});

