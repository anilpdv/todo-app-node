const mongoClient = require("mongodb").MongoClient;


mongoClient.connect('mongodb://localhost/todoApp',{useNewUrlParser:true},(err,client)=>{
    // : if error ? console log it
    if(err){
        console.log(err);
    }

    // : if not 
    console.log("Application is connected to the database..");
    
    // : creating the instance of the databse
    const db = client.db("todoApp");
    
    // : creating collection todo
    db.collection("Users").insertOne({
        name:"nilpdv",
        age:20,
        login:false

    },(err,result)=>{
        // : if error > console log it
        if(err){
            console.log(err);
        }

        console.log(JSON.stringify(result.ops));
    });
    
    // : closing the connection
    client.close();

});