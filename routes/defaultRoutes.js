const express = require('express') ;
const router = express.Router() ;
const defaultControllers = require('../controllers/defaultControllers') ;

router.all('/*', (req, res, next) => {
    
    req.app.locals.layout = 'default';
    
    next();
});



router.route('/')
  .get(defaultControllers.index) ;



router.route('/Contact')
 .get(defaultControllers.contact)
 .post(defaultControllers.submitmessage);

router.route('/courses')
 .get(defaultControllers.getCourses) ;
router.route('/courses/view/:id')
  .get(defaultControllers.GetView);

  //test 
router.route('/test')
  .get(defaultControllers.getTest) ; 
  

module.exports = router ;
