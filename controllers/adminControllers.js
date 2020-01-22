Modulee = require('../models/modulee').Modulee ;
Email = require('../models/email').Email ;
Cours = require('../models/cours').Cours ;
Td = require('../models/td').Td ;
Tp = require('../models/tp').Tp ;
remModule = require('../models/remModule').remModule ;
const {host} = require('../config/configuration') ;
const {isEmpty} = require('../config/configuration') ;
const {moveFilesToUploadFloder} = require('../config/configuration') ;
module.exports = {
    index : (req,res)=>{
       res.render('admin/index') ;
    } ,
    getIndexModules : (req,res)=>{
        Modulee.find()
          .then( Modules =>{
              res.render('admin/modulee/index',{modules:Modules});
          }) ;         
    },
    
    postCreateModelData :(req,res)=>{
        newModule = new Modulee({
            title:req.body.title
        });
        newModule.save().then(post =>{  
            const url = host+"/admin/modules" ;
            res.redirect(url);
        });
        
    },
    getEditPage : (req,res)=>{
        Modulee.findById(req.params.id).then((modulee=>{
            res.render('admin/modulee/edit',{modulee:modulee}) ;
        }))
         
    },
    submitTheEditPage : (req,res) =>{
    Modulee.findById(req.params.id)
    .then(post =>{
        post.title = req.body.title ;
        post.save().then(editedPost =>{
            const url = host+"/admin/modules" ;
            res.redirect(url);
            
        }) ;
    });
       
    },

    deleteModule:  (req,res) =>{
    Modulee.findByIdAndDelete(req.params.id)
    .then(deletemodule =>{
        const url = host+"/admin/modules" ;
        res.redirect(url);
       })  ;
    },
    getAllmails : (req,res)=>{
        Email.find().then(emails=>{
            res.render('admin/emails/index',{emails:emails});
        }) ;
        
    } ,
    deletemessage : (req,res)=>{
        Email.findByIdAndDelete(req.params.id)
        .then(deletedmessage=>{
            const url = host+"/admin/emails" ;
            res.redirect(url) ;
        }) ;
    } ,
    getInsertCours : (req,res) =>{
        Modulee.find()
        .then(modulee=>{
         res.render('admin/insertModuleData/insertCours',{modulee:modulee}) ; 
        }) 
        
    } ,
    submitCours : (req,res)=>{
        let filename = '';
        
        if(!isEmpty(req.files)) {
            let file = req.files.cours;
            filename = file.name;
            let uploadDir = './public/uploads/';
            
            file.mv(uploadDir+filename, (err) => {
                if (err)
                    throw err;
            });
        
      const newcours = new Cours({
          name : req.body.title ,
          modulee : req.body.modulee ,
          file: `/uploads/${filename}`,
      }) ;
      newcours.save().then(courss =>{
        const url = host+"/admin/courses" ;
        res.redirect(url) ;
      }) ;
    } 
    },
    getCoursesTdsTps : (req,res) =>{
        Cours.find()
        .populate('module')
        .then(cours=>{
            Td.find().then(td=>{
                Tp.find().then(tp=>{
                    Modulee.find().then(modulee=>{
                        console.log(req.body.filter) ;
                        res.render('admin/courses/index',{cours:cours , td:td, tp:tp , modulee:modulee}) ;
                    });
                    
                });
                
            }) ;
                
            
            
        }) ;
    
    },
    getSearch : (req,res)=>{
        Modulee.find()
        .then(modulee=>{
            res.render('admin/courses/search',{modulee:modulee})  ;
        
        });

    },
    submitSearch : (req,res)=>{
    Cours.find({modulee:req.body.modulee})
         .then(cours=>{
             Td.find({modulee:req.body.modulee})
                 .then(td=>{
                     Tp.find({modulee:req.body.modulee})
                        .then(tp=>{
                            
                                    console.log
                                    res.render('admin/courses/search',{cours:cours,td:td,tp:tp})  ;
                                
                            
                        });
                 });
         });
    },
   
    DeleteCourse :(req,res)=>{
      Cours.findByIdAndDelete(req.params.id)
      .then(deletedCourse=>{
        const url = host+"/admin/courses" ;
        res.redirect(url) ;
      })  ;

    },
    getInsertTd : (req,res)=>{
        Modulee.find().then(modulee=>{
            res.render('admin/insertModuleData/insertTd',{modulee:modulee}) ;
        }) ;
        
    },
    submitTd : (req,res)=>{
        let filename = '';
        
        if(!isEmpty(req.files)) {
            let file = req.files.td;
            filename = file.name;
            let uploadDir = './public/uploads/';
            
            file.mv(uploadDir+filename, (err) => {
                if (err)
                    throw err;
            });

     newtd = new Td({
        name : req.body.title, 
        modulee : req.body.modulee,
        file : `/uploads/${filename}` 
     });
     newtd.save().then(td=>{
        const url = host+"/admin/courses" ;
        res.redirect(url) ; 
     });
    
    
    

    }
},

DeleteTd : (req,res)=>{
    Td.findByIdAndDelete(req.params.id)
    .then(deletedtd=>{
      const url = host+"/admin/courses" ;
      res.redirect(url) ;
    })  ;    
},

getInsertTp : (req,res)=>{
    Modulee.find().then(modulee=>{
        res.render('admin/insertModuleData/insertTp',{modulee:modulee}) ;
    }) ;
},

submitTp : (req,res)=>{
    let filename = '';
        
        if(!isEmpty(req.files)) {
            let file = req.files.tp;
            filename = file.name;
            let uploadDir = './public/uploads/';
            
            file.mv(uploadDir+filename, (err) => {
                if (err)
                    throw err;
            });
    newtp = new Tp({
        name : req.body.title ,
        modulee : req.body.modulee ,
        file: `/uploads/${filename}`
    }) ;
    newtp.save().then(tp=>{
        const url = host+"/admin/courses" ;
        res.redirect(url) ;
    });
}
},

DeleteTp : (req,res)=>{
    Tp.findByIdAndDelete(req.params.id)
    .then(deletedtd=>{
      const url = host+"/admin/courses" ;
      res.redirect(url) ;
    })  ;    
},

    }