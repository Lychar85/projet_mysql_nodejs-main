const express  = require('express'),
      app = express(),
      util = require('util')
      mysql = require('mysql'),
      port = 3500;


// Dotenv
require('dotenv').config()


// Mysql
const db = mysql.createConnection({
  host: process.env.DB_HOST ,
  user: process.env.DB_USER ,
  password:process.env.DB_PASS ,
  database: process.env.DB_NAME
})

db.connect(
  (err)=>{
    if(err) {throw err}
    else console.log('connect to server mysql')
  }
)

global.querysql = util.promisify(db.query).bind(db)

// EJS
app.set('view engine', 'ejs'); 


// Static folder
app.use(express.static('public'));


// Middleware - BodyParser
app.use(express.json())
app.use(express.urlencoded({extended: false}))


// Routes
const index = require('./routes/indexRoute')
const auth = require('./routes/authRoute')
const dashboard = require('./routes/dashboardRoute')

app.use('/', index)
app.use('/auth', auth)
app.use('/dashboard', dashboard)

app.get('*', function(req, res){
  res.render('404');
});


// Listen
app.listen(port, () => {
  console.log(`Le serveur tourne sur le port: ${port}`);
});