const mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost/todoApp",{useNewUrlParser:true},(err,client)=>{
    console.log(client)
    if(err){
        return console.log(err);
    }

    // : if connected ? then say this
    console.log("Connected to mongodb server");
    
    // : creating instance of db
    const db = client.db("todoApp");
    console.log(db); 
    // : creating collection Todo
    db.collection("Todos").insertOne({
        text:"something to do",
        completed:true
    }, (err,result)=>{
        
        // : if err then console log this
        if(err){
            return console.log(err);
        }

        // : if not error
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));

    });

    // : closing the connection
    client.close();
    });




