var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const mongoose = require('mongoose');

var doctorRouter = require('./routes/doctor');
var patientRouter = require('./routes/patient');
// var productsRouter = require('./routes/produsts');
// var orderRouter = require('./routes/order');

var app = express();



app.use(logger('dev'));

//connect to DB
mongoose.connect('mongodb://localhost:27017/E-clinic', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database Connected .....')
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/doctor', doctorRouter);
app.use('/patient', patientRouter);
// app.use('/products', productsRouter);
// app.use('/order', orderRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
});

module.exports = app;
