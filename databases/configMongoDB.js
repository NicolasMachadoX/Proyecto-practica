const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');

const mongooseConexion = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conexion with mongoDB using mongoose sucessfully');
    } catch (error) {
     throw new Error("DB CAN'T INICIALIZATED");   
    }
};

const mongoDbConexion = async () => {
    try {

        const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        console.log('Conexion without mongoose sucessfully');
        
        
    } catch (error) {
        throw new Error("DB CAN'T INICIALIZATED");   
    }
}


module.exports =
{
    mongooseConexion,
    mongoDbConexion
};