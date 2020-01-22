Modulee = require('../models/modulee').Modulee ;
Email = require('../models/email').Email ;
Cours = require('../models/cours').Cours ;
Td = require('../models/td').Td ;
Tp = require('../models/tp').Tp ;
module.exports = {
    index : (req,res)=>{
        res.render('default/index') ;
    } ,
    contact : (req,res)=>{
        res.render('default/contact') ;
    },
    submitmessage : (req,res)=>{
    newMessage = new Email({
        firstname: req.body.first ,
        lastname : req.body.last ,
        email : req.body.email ,
        body : req.body.body ,
    });
    newMessage.save().then( saved => {
       res.redirect('/contact') ;
    }

    ) 
    },
    getCourses :(req,res)=>{
        Cours.find()
        .populate('module')
        .then(cours=>{
            Td.find().then(td=>{
                Tp.find().then(tp=>{
                    Modulee.find().then(modulee=>{
                            res.render('default/courses',{modulee:modulee,td:td,tp:tp,cours:cours});
                    });
                });
            });
        });
    },
    GetView : (req,res)=>{
       Cours.find({_id:req.params.id})
         .then(cours=>{
             Td.find({_id:req.params.id})
               .then(td=>{
                   Tp.find({_id:req.params.id})
                     .then(tp=>{
                        res.render('default/view',{cours:cours,td:td,tp:tp});
                     })
               })
         }) 
       
    },
    getTest : (req,res)=>{
        res.render('default/test');
    }

} 