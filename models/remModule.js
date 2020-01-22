const mongoose = require('mongoose')
const Schema = mongoose.Schema ;



remModule= new Schema({

    cours :[
         {
        type : Schema.Types.ObjectId ,
        ref:'Cours' ,
       }
] ,

    td : [
        {
        type : Schema.Types.ObjectId,
        ref : 'Td'
        }
    ] ,

    tp : [
        {
        type : Schema.Types.ObjectId,
        ref : 'Tp'
        }
    ] ,
   
     modulee : {
         type : Schema.Types.ObjectId,
         ref : 'module' ,
     }

    }) ;
    
module.exports ={remModule : mongoose.model('remModule',remModule)} ;




