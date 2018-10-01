
//Connection with the mongodb database
var mongo = require("mongoose");  
var db =  mongo.connect("mongodb://127.0.0.1:27017/db_contact",{ useMongoClient: true }, function(err, response){  
      if(err)
          {
              console.log('Failed to connect to ' + db);
          }  
      else
          {
              console.log('Connected to ' + db);
          }  
    });  
module.exports =db;  

