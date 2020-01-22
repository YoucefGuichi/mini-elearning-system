const express = require('express') ;
const mongoose = require('mongoose') ;

const {mongodbUrl} = require('./config/configuration') ;
const path = require('path');
const session = require('express-session') ;
const hbs = require('express-handlebars');
const methodOvrride = require('method-override') ;
const fileupload = require('express-fileupload') ;
const multer = require('multer') ;

const app = express() ;

// configure mongoose to connect to mongodb 
mongoose.connect(mongodbUrl,{ useNewUrlParser: true })
.then(response =>{
    console.log('mongodb connect successffully  ');
}).catch(err =>{
    console.log(err) ;
}) ;

// configure express 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// sessions

app.use(session({
   secret: 'anysecret',
    saveUninitialized: true,
   resave: true
}));

/* Setup View Engine To Use Handlebars */
app.engine('handlebars', hbs({defaultLayout: 'default'}));
app.set('view engine' , 'handlebars');

// method override 
app.use(methodOvrride('newMethod')) ;

// file upload 
app.use(fileupload());
// Routes 

const defaultRoutes = require('./routes/defaultRoutes') ;
const adminRoutes = require('./routes/adminRoutes') ;


app.use('/',defaultRoutes) ;
app.use('/admin',adminRoutes) ;


// start the server 
app.listen(3000,()=>{
 console.log('server is running on Port 3000') ;
})  ;