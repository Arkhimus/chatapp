const cors = require('cors');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
// const userRoutes = require('./routes/user');
// const chatRoutes = require('./routes/chat');
// const mongoose = require('mongoose');

const PORT = 5000;

// mongoose.connect('mongodb+srv://ChatAdmin:1234_Qwer@cluster0-bvuhd.mongodb.net/chatApp?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.use('/user', userRoutes);
// app.use('/chat', chatRoutes);

let messages = new Array();


io.on('connection', socket => {
  socket.emit('currentMessages', messages)
  socket.on('newMessage', (message) => {
    messages.push(message)
    socket.emit('messageCreated', message);
  })
  console.log('Socket ID: ' + socket.id);
});

http.listen(PORT, () => {
  console.log('Server is on port ' + PORT);
});

module.exports = io;
