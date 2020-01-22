const mongoose = require('mongoose')
const Schema = mongoose.Schema ;



Td= new Schema({
    name : {
        type :String ,
        required : true ,
    },
    file : {
        type : String ,
        default : '' ,
    },
    modulee : {
        type : Schema.Types.ObjectId,
        ref : 'modulee' ,
    }
});

module.exports = {Td: mongoose.model('Td', Td )};
