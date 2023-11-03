const {Schema, model} = require('mongoose');

const userSchema = Schema({

    name:{
        type: String,
        require: [true, "The data it's necesary"],
        trim: true
    }



});

module.exports = model('user', userSchema);