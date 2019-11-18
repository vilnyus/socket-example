var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res){
    res.sendFile('D:/vscode/nodejs-starter/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.broadcast.emit('hi');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('chat message', function(msg){
        io.emit('chat message', function(msg){
            io.emit('chat message', msg);
        });
        console.log('message: ' + msg);
    })
});

http.listen(3030, function(){
    console.log('listen on *:3030');
});