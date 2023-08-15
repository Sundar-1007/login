const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config();
app.use(cors());


const db = require('./model/db');

const taskRoutes = require('./routes/taskRoutes')

app.use(express.json());
app.use('/', taskRoutes);
app.get('/', function (req, res) {
  res.send('listening on the following port: ' + process.env.PORT)
});

app.listen(process.env.PORT, function () {
    console.log('listening on the port ' + process.env.PORT);
});