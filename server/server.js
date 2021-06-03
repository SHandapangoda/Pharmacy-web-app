
const mongo = require('mongodb');
const connect = require('socket.io');
const url = "mongodb://localhost/";
class Server{
    // create database
     createDatabase(){
        mongo.connect('mongodb://localhost/user', function(err,db){
        if (err) throw err;
    
        console.log('connected ');
    
        client.on('connection',function(socket){
            let login = db.collection('user');
            socket.on('submit', function(data){
    
            });
            });
    });
    }
    
    // create a collection
   createCollection(){
        connect(url, function(err,db){
            if (err) throw err;
            const dbo = db.db("user");
            dbo.createCollection("customers" , function(err,res){
                if(err) throw err;
                console.log("Collection made ")
            });
        
        });
    }
    
    // insert data to a collection 
     insertData(){
        connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("user");
            var myobj = { name: "Company Inc", address: "Highway 37" };
            dbo.collection("customers").insertOne(myobj, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
          }); 
     }
    
    // find a collection
     findCollection(){
        mongo.connect(url, function(err, db ){
            if(err) throw err;
            const dbo = db.db("user");
            dbo.collection("customers").findOne({},function(err, result){
                if (err) throw err;
                console.log(result.name);
                db.close();
            });
        });
    }
    
    // find a query
     findQuery(){
        mongo.connect(url, function(err,db){
            if(err) throw err;
            const dbo =db.db("user");
            const que = {address: "Victoria Park"};
      
            dbo.collection("customers").find(que).toArray(function(err,result){
                if(err) throw err;
                console.log(result);
                db.close();
            });
      
        });
    }
    
    // sorting 
     sortFun(){
        mongo.connect(url,function(err,db){
            if(err) throw err;
            const dbo = db.db("user");
            const sort = {name: 1};
      
            dbo.collection("customers").find().sort(sort).toArray(function(err,result){
                if (err) throw err;
                console.log(result);
                db.close();
            });
        });
    }
     
    // delete
     Delete(){
        mongo.connect(url,function(err,db){
            if(err) throw err;
            const dbo = db.db("user");
            const id = {_id: "60967a661736332a187d72df"};
            dbo.collection("customers").deleteOne(id,function(err,result){
                if(err) throw err;
                console.log("Document deleted");
                db.close();
            });
          });
    }
    
    // drop a collection
     dropCollection(){
        mongo.connect(url,function(err,db){
            if(err)throw err;
            const dbo = db.db("user");
            dbo.collection("customers").drop(function(err,delOK){
                if(err) throw err;
                if(delOK) console.log("removed collection");
                db.close();
            });
        
          });
    }
     
    // update query
     queryUpdate(){
        mongo.connect(url,function(err,db){
            if(err)throw err;
            const dbo = db.db("user");
            const que = {address:"New"};
            const val = {$set:{name:"Tay",address:"Canton"}}  
            dbo.collection("customers").updateOne(que,val,function(err,result){
                if(err)throw err;
                console.log("Updated a doc");
                db.close(); 
            });
        });
    }
    
}



