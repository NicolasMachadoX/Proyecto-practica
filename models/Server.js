const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const {mongooseConexion, mongoDbConexion} = require('../databases/configMongoDB');
const conexionMySQL = require('../databases/configMySQL');
class Server{

    constructor(){

        this.app = express();

        this.port = process.env.PORT;

        
        this.paths =  {

            users : '/api/users/'
        }
        

        this.middlewares();

        this.MySQLConexion();

        this.MongoDBConexion();

        this.MongooseConexion();
        
        this.routes();
    }


    async MySQLConexion(){
        await conexionMySQL();
    }

    async MongoDBConexion(){
        await mongoDbConexion();
    }

    async MongooseConexion(){
        await mongooseConexion();
    }

    routes(){
        this.app.use(this.paths.users, require('../routes/users.routes'));
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(morgan('dev'))

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`The server it's running in port: ${this.port}`);
        })

    }





}

module.exports = Server;