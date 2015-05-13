var express = require('express');
var path = require('path');

var routes = require('./routes/index');
var profile = require('./routes/profile');
var mymusic = require('./routes/mymusic');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('jade').renderFile);
app.set('view engine', 'jade');



app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/profile', profile);
app.use('/profile/mymusic', mymusic);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});*/

var port = process.env.PORT || 3000;
console.log("Express server running on " + port);
app.listen(process.env.PORT || port);

module.exports = app;
