const mongo = require('mongodb');
const connect = require('socket.io');
const url = "mongodb://localhost"

// class for item
class items{
    createItem(){

        connect(url,function(err,db){
            if(err) throw err;
            const dbo = db.db("user");
            dbo.createItem('item', function(err,res){
                if(err) throw err;
                console.log("collection item created");
            })
        })
    }

    // add items
    insertItem(){
        mongo.connect(url,function(err,db){
            if(err) throw err;
            const dbo = db.db("user");
            var item = {item_name:"Amoxilin",price:"Rs220", item_id:32,type:"Tablet"}
            dbo.collection("item").insertOne(item,function(err,res){
                if(err) throw err;
                console.log("document created");
                db.close();
            })
        })
    }

    //update data
    updateItem(){
        mongo.connect(url,function(err,db){
            if(err)throw err;
            const dbo = db.db("user");
            const que = {price:""};
            const val = {$set:{item_id:"",price:""}}  
            dbo.collection("item").updateOne(que,val,function(err,result){
                if(err)throw err;
                console.log("Updated a doc");
                db.close(); 
            });
        });
    }

    //delete data
    deleteItem(){
        mongo.connect(url,function(err,db){
            if(err)throw err;
            const dbo = db.db("user");
            dbo.collection("item").drop(function(err,delOK){
                if(err) throw err;
                if(delOK) console.log("removed collection");
                db.close();
            });
        
          });
        }
}