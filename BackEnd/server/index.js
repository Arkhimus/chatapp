// const app = require('express')();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const http = require('http').Server(app);
// const io = module.exports.io = require('socket.io')(http);
// const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(cors());

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// app.post('/dashboard', (req, res) => {

// });

// const getVisitors = () => {
//   let clients = io.sockets.clients().connected;
//   let sockets = Object.values(clients);
//   let users = sockets.map(s => s.user);
//   return users
// };

// const emitVisitors = () => {
//   io.emit('visitors', getVisitors());
// }

// io.on('connection', socket => {
//   console.log('a user connected');

//   socket.on('join_room', room => {
//     socket.join(room);
//   });

//   socket.on('message', ({ room, message }) => {
//     //message & room
//     socket.to(room).emit('message', {
//       message,
//     });
//   });

//   socket.on('chat message', function(msg){
//     console.log('message: ' + msg);
//   });

//   //typing event
//   socket.on('typing', ({ room }) => {
//     socket.to(room).emit('typing', 'someone is writing to you');
//   });
//   //stopping type
//   socket.on('stopped_typing', ({ room }) => {
//     socket.to(room).emit('stopped_typing');
//   });

// });

// http.listen(PORT, () => {
//   console.log('listening on port: ' + PORT);
// });
