const mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost/todoApp',{useNewUrlParser:true},(err,client)=>{
    if(err){
        console.log(err);
    }

    console.log('app is connected');

    const db = client.db('todoApp');
    db.collection('Todos').find({"completed":true}).count().then((docs)=>{
            console.log(docs);
    });

});

