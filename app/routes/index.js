const controller = require('../controller/index')
const express = require('express');
const routes = express.Router();


routes.get('/', controller.makanan.getAll);

module.exports = routes;