const express = require('express')
const route = express.Router();

const {getAllData, setData, login} = require('../controller/taskController')

route.get('/', getAllData);
route.post('/', setData);
route.post('/login', login);

module.exports = route;