//for .env
require('dotenv').config()

var express = require('express');

var app = express();

const connect=require("./db/connect")

var doctorRouter = require('./routes/doctor');
var patientRouter = require('./routes/patient');
var aggregationRouter = require('./routes/aggregation');
var IDrouter = require('./routes/IDroute');

app.use(express.json());

app.use('/doctor', doctorRouter);
app.use('/patient', patientRouter);
app.use('/aggregation', aggregationRouter);
app.use('/ID',IDrouter);

const start = async () => {
  try {
    // connectDB
    await connect(process.env.MONGO_URI);
 app.listen(3000, () => console.log(`Server is listening port ${3000}...`));

  } catch (error) {
    console.log(error);
  }
};

start();


