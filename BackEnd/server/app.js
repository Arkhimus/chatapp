const cors = require('cors');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
// const userRoutes = require('./routes/user');
// const chatRoutes = require('./routes/chat');
const mongoose = require('mongoose');
const ChatModel = require('./models/chat');
const PORT = 5000;

mongoose.connect('mongodb+srv://ChatAdmin:1234_Qwer@cluster0-bvuhd.mongodb.net/chatApp?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.use('/user', userRoutes);
// app.use('/chat', chatRoutes);

let messages = [];
io.on('connection', async (socket) => {
  let actualMessagesInDB = await ChatModel.find({});
  socket.emit('currentMessages', actualMessagesInDB)
  socket.on('newMessage', async (data) => {
    let newMessage = await ChatModel.create({ _id: new mongoose.Types.ObjectId(), message: data.message, roomName: 'Test' });
    await newMessage.save();
    socket.emit('messageCreated', newMessage);
  })
  console.log('Socket ID: ' + socket.id);
});

http.listen(PORT, () => {
  console.log('Server is on port ' + PORT);
});

module.exports = io;
