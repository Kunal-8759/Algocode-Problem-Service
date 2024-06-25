const {CosmosClient}=require('@azure/cosmos');
const {endpoint,key,databaseId,containerId}=require('../config/server.config')

//connecting your code to cosmos db

const client =  new CosmosClient({endpoint,key});
const database=client.database(databaseId);
const container=database.container(containerId);

//add function--which add the log in the cosmos
async function logToCosmosDB(level,message){
    try{
        //defining the structure of the table

        await container.items.create({//item simply here one tuple
            timeStamp:new Date().toISOString(),
            level:level,
            message:message
        })
        
    }catch(error){
        console.log("error logging to the cosmos db");
        throw error;
    }    
}

module.exports=logToCosmosDB;