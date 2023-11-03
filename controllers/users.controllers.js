const User = require('../models/Users');
const {MongoClient} = require('mongodb')

const client = new MongoClient(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const getAll = async (req,res)=>{
    try {
        const data = await User.find();
        console.log(data);
        res.json(data);
        
    } catch (error) {
        res.status(202).json({msg:error});
    }
}

const getAllMongoDB = async (req,res) =>{
    try {
        const db = client.db();
        const users = db.collection('users');
        const data = await users.find({}).toArray();
        res.json({msg:data})
    } catch (error) {
        res.status(202).json({msg:error});
    }
};

module.exports = {

    getAll,
    getAllMongoDB
    
}