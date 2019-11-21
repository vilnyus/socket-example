var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var io = require('socket.io');

// server.listen(8080);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

<<<<<<< HEAD
var chat = io
  .of('/chat')
  .on('connection', function (socket) {
    socket.emit('a message', {
        that: 'only'
      , '/chat': 'will get'
    });
    chat.emit('a message', {
        everyone: 'in'
      , '/chat': 'will get'
    });
  });

var news = io
  .of('/news')
  .on('connection', function (socket) {
    socket.emit('item', { news: 'item' });
  });


=======
io.on('connection', function(socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function(data) {
    console.log(data, 'This is from socket.on JS');
  });
});
>>>>>>> e5b1580e2b767caa50e71104f1b23cdc5e9c97d0
