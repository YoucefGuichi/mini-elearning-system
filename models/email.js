const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

email = new Schema({
  firstname : {
      type:String ,
      required : true ,
  } ,
  lastname : {
      type : String, 
      required : true ,
  } ,
  email : {
      type : String ,
      required:true ,
  } ,
  body : {
      type : String ,
      required: true ,
  } ,


}) ;

module.exports ={Email : mongoose.model('email',email)} ;


