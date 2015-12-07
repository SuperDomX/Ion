var session      = require('express-session');
var bodyParser   = require('body-parser');
var errorHandler = require('errorhandler');
var cookieParser = require('cookie-parser');
var MongoStore   = require('connect-mongo')(session);

module.exports = function(app) {
  app.set('views', './www.superdomx/src/pages/');
  app.set('view engine', 'jade');
  app.use(cookieParser());
  app.use(session({
    secret: 'faeb4453e5d14fe6f6d04637f78077c76c73d1b4',
    proxy: true,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ host: 'localhost', port: 27017, db: 'node-login'})
    })
  );
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  if (app.get('env') == 'development') app.use(errorHandler());
}
