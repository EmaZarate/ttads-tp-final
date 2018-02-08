var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var cors        = require('cors');
var methodOverride = require('method-override');
var router= express.Router();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MongoStore = require('connect-mongo')(session);

var app = express();
app.use(cors());

const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(methodOverride());
app.use('/images',express.static('images'));

app.use(session({
  secret: "anystring",
  saveUninitialized: true,
  resave: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { maxAge: 180 * 60 * 200000}
 }))

mongoose.connect('mongodb://localhost/GestionSalones', { useMongoClient: true });
mongoose.Promise = global.Promise;
require('./models/user.js');
require('./models/room.js');
require('./models/guest.js');
require('./models/permits.js');
require('./models/menu.js');
require('./models/sign.js');
require('./models/reservation.js');
app.use(require('./routes'));

app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
})

app.use(router);

app.listen(port, () =>{
  console.log('we are live on ' + port);
});
