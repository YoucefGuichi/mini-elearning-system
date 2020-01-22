const express = require('express') ;
const router = express.Router() ;
const adminControllers = require('../controllers/adminControllers') ;

router.all('/*', (req, res, next) => {
    
    req.app.locals.layout = 'admin';
    
    next();
});
// index 
router.route('/')
 .get(adminControllers.index) ;

 // 
             /* moudule routes */ 
 
 // fetch modules index
 router.route('/modules')
   .get(adminControllers.getIndexModules) ;
 // create module  
router.route('/modules/create') 
 .post(adminControllers.postCreateModelData) ;  
  
// edit module 
router.route('/modules/edit/:id')
 .get(adminControllers.getEditPage)
 .put(adminControllers.submitTheEditPage);

// delete module 
router.route('/modules/delete/:id')
    .delete(adminControllers.deleteModule) ; 
   
                        /* emails routes */

// fetch all emails                        
router.route('/emails')
 .get(adminControllers.getAllmails);
 
// delete emails 
router.route('/emails/delete/:id')
 .delete(adminControllers.deletemessage) ;
   
  
                       /* insert Module Data (cours,td,tp)  */

// insert cours 
router.route('/modules/InsertCours')
  .get(adminControllers.getInsertCours)
  .post(adminControllers.submitCours) ;
// insert td 
router.route('/modules/InsertTd')
   .get(adminControllers.getInsertTd)
   .post(adminControllers.submitTd) ;
  
// insert tp 
router.route('/modules/InsertTp')
    .get(adminControllers.getInsertTp)
    .post(adminControllers.submitTp);

  

                        /* courses routes */  
router.route('/courses')
  .get(adminControllers.getCoursesTdsTps);
  
router.route('/courses/filter')
  .get(adminControllers.getSearch)
  .post(adminControllers.submitSearch);   
 
  
router.route('/courses/DeleteCourse/:id') 
  .delete(adminControllers.DeleteCourse) ;   

router.route('/courses/Deletetd/:id')
 .delete(adminControllers.DeleteTd);

 router.route('/courses/Deletetp/:id')
 .delete(adminControllers.DeleteTp);



 module.exports = router ;