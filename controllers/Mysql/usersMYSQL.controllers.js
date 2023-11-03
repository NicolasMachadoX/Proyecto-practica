const MySQLConexion = require('../../databases/configMySQL');

const getAllMySQL = async (req,res)=>{
    try {   
        const conexion = await MySQLConexion();
        const result = await conexion.query('SELECT * FROM userjwt');
        res.json(result);
    } catch (error) {
        throw new Error('DB CANT INICIALIZATED');   
    }
}

module.exports = {

    getAllMySQL
}