const express  = require('express'),
      app = express(),
      util = require('util'),
      mysql = require('mysql'),
      session = require('express-session'),
      MySQLStore = require('express-mysql-session'),
      methodOverride = require('method-override'),
      flash = require('connect-flash'),
      port = 3600;


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


// METHODE OVERRIDE
app.use(methodOverride('_method'))

global.querysql = util.promisify(db.query).bind(db)

//Express sessionMysql
const sessionStore = new MySQLStore({}, db)

//express session
app.use(session({
  name: 'biscuit',
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  store: sessionStore,
  cookie: { 
    maxAge: 1000 * 60 * 60 * 24 //24 heures
   }
}))


// EJS
app.set('view engine', 'ejs');


//activer les messages flash
app.use(flash())


// Static folder
app.use(express.static('public'));


// Middleware - BodyParser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Middleware
const verifyAuth = require('./middleware/verifyauth')

// Routes
const index = require('./routes/indexRoute')
const auth = require('./routes/authRoute')
const dashboard = require('./routes/dashboardRoute')
const premium = require('./routes/premiumRoute')

app.use('/', index)
app.use('/auth', auth)
app.use('/dashboard', verifyAuth.getVerifyAuth, dashboard)
app.use('/premium', premium)

app.get('*', function(req, res){
  res.render('404');
});


// Listen
app.listen(port, () => {
  console.log(`Le serveur tourne sur le port: ${port}`);
});