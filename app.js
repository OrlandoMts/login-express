/* eslint-disable no-unused-vars */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/* Variables de entorno */
require('dotenv').config({path: './env/.env'});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let signInRouter = require('./routes/signIn');
let signUpRouter = require('./routes/signUp');
let homeRouter = require('./routes/login/home');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signin', signInRouter);
app.use('/signup', signUpRouter);
// app.use('/home', homeRouter);

app.use(function(req, res, next){
  if(!req.user)
    res.header('Cache-control', 'private, no-cache, no-store, must-revalidate');
    next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
