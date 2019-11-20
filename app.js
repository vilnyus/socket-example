var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

var client = 0;
io.on('connection', function(socket){
  client++;
  io.emit('newclientconnect', {message: ` ${client} connected`});

  socket.on('chat message', function(msg){
      console.log("chat received");
      io.emit('chat message', msg);
    });
  });

http.listen(3000, function(){
    console.log("Listening on port: 3000");
});

