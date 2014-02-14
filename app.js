
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var food = require('./routes/food');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var contacts = [ 
  		{ 	name  : "Jackie Thompson"
  			,phone : "+353(086)932 6893"
  			,email : "tom13@gmail.com" 		
  		}
  		,{ 	name  : "Bruce Wayne"
  			,phone : "+353(087)362 9343"
  			,email : "mary.x@gmail.com" 		
  		}
  		,{ 	name  : "Davey Jones"
  			,phone : "+353(085)234 1457"
  			,email : "tom13@gmail.com" 		
  		}
  	] ;

app.get('/', routes.index(contacts));
app.get('/contacts', routes.contacts());
app.get('/tracker', food.foodIndex());
app.get('/users', user.list);

app.post('/contacts.json', routes.addContact(contacts));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
