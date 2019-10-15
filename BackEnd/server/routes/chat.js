const express = require('express');
const Chat = require('../models/chat');
const router = express.Router();
const checkAuth = require('../middlewares/checkAuth');
const jwt = require('jsonwebtoken');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

router.get('/dashboard', /*checkAuth,*/(req, res, next) => {

});

router.post('/dashboard', /*checkAuth,*/(req, res, next) => {

});

module.exports = router;
