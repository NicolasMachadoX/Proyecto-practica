const mysql = require('promise-mysql');
const config = require('./config');

const Conexion = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
})

const MySQLConexion = () => {
    console.log('MySQL database Conexion succesfully');
    return Conexion;
}

module.exports = MySQLConexion;