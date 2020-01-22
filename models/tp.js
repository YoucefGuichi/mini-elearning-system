const mongoose = require('mongoose')
const Schema = mongoose.Schema ;



Tp= new Schema({
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

module.exports = {Tp: mongoose.model('Tp', Tp )};
