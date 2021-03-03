const express = require('express');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const sessionHandler = require('io-session-handler').from(io);

sessionHandler.connectionListener((connection) => {
  console.log(connection);
});

http.listen(3000);

app.use(express.static('dist'));

io.on('connection', (socket, sessionId) => {
  socket.join(sessionId);
  console.log(sessionId);
  socket.on('message', (message, sessionId) => {
    console.log(message.body);
    console.log(`What is sessionId? ${sessionId}`);
    socket.to(sessionId).emit('message', message);
  });
  socket.on('play', (timecode) => {
    console.log('play command received!');
    socket.broadcast.emit('play', timecode);
  });
  socket.on('pause', (timecode) => {
    console.log('pause command received!');
    socket.broadcast.emit('pause', timecode);
  });
  socket.on('url', (url) => {
    console.log('new url received!');
    socket.broadcast.emit('url', url);
  });
  socket.on('join', (roomId) => {
    socket.broadcast.emit('join', roomId);
  });
});

// app.get('/node_modules/socket.io/client-dist/socket.io.js', (err, res) => {
//   if (err) {
//     console.log(err);
//   }
//   res.status(200).send('../node_modules/socket.io/client-dist/socket.io.js');
// });
