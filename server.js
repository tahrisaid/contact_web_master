var express = require("express");  
var path = require("path");  
var mongo = require("mongoose");   
var bodyParser = require('body-parser');   
var morgan = require("morgan");  
var db = require("./database.js");  
  
var app = express();  
var port = process.env.port || 3000;  // test the app at http://localhost:3000
var srcpath  =path.join(__dirname,'/public') ;  
app.use(express.static('public'));  
app.use(bodyParser.json({limit:'5mb'}));    
app.use(bodyParser.urlencoded({extended:true, limit:'5mb'}));  
  
  
var mongoose = require('mongoose');  

var Schema = mongoose.Schema;  

var messageSchema = new Schema({    // The colelction (The entity) that we will be used 
    name: { type: String ,null:false  },       
    address: { type: String  ,null:false },     
    email: { type: String,null:false },       
    contact: { type: String ,null:false},       
},{ versionKey: false });  
   
  
var model = mongoose.model('message', messageSchema, 'message');  
  
  
//api for Insert data into database (message collection)
app.post("/api/savedata",function(req,res){   
    var mod = new model(req.body);  
        mod.save(function(err,data){  
            if(err){  
                res.send(err);   
                console.log(err)             
            }  
            else{        
                console.log("data saved")             
            }  
        });  
})  
      
// call by default index.html page  
app.get("*",function(req,res){   
    res.sendFile(srcpath +'/index.html');  
})  
  
//server stat on given port  
app.listen(port,function(){   
    console.log("server start on port"+ port);  
})  