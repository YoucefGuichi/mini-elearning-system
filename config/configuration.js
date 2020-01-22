module.exports = {
    mongodbUrl : 'mongodb://localhost:27017/portfolio' ,
    host : 'http://127.0.0.1:3000' ,
    isEmpty : function(obj){
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                return false ;
            }
        }
        return true ;
    } ,
   

             
            
            

          
    
    
}