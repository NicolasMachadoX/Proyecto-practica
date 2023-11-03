const {Router} = require('express');
const { getAll, getAllMongoDB } = require('../controllers/users.controllers');
const {getAllMySQL} = require('../controllers/Mysql/usersMYSQL.controllers');
const router = Router();


router.get('/get', getAll);
router.get('/getMDB', getAllMongoDB);

//mysql

router.get('/getAll', getAllMySQL);

module.exports = router;