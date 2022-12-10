const{MongoClient, ObjectID}=require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='FIFA-tasks'

const id=new ObjectID();
console.log(id);

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database');
    }    
    const db=client.db(databaseName)

    db.collection('tasks').insertMany([{
        description:'Atomic Habits',
        compeleted:true
    },{
        description:'NodeJS',
        compeleted:false
    }])
    
       
})
 

