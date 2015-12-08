var express       = require('express');
var app           = express();
var server        = require('http').Server(app);
var site          = 'site';
var mongod        = require('./mongod')(app);
var routes        = require('./routes')(app);
site        = 'www.superdomx/' + site;
console.log("Server serving: "+site);

app.use(express.static(site));
app.use(express.static('server/public'));

// app.use(require('stylus').middleware({ src:'server/public' }));

module.exports = server;
