var express = require('express');
var app     = express();
var server  = require('http').Server(app);
var site    = 'site';
 

site        = 'www.superdomx/' + site;
console.log("Server serving: "+site);

app.use(express.static(site));
app.use(express.static('server/public'));

app.use('/widgets',function(request,response){
  response.render('index');
});

module.exports = server;
