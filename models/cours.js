const mongoose = require('mongoose')
const Schema = mongoose.Schema ;



Cours = new Schema({
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

})

module.exports = {Cours:mongoose.model('Cours', Cours )};
