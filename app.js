var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var nameSpaceWeek = io.of("/week");
var nameSpaceDay = io.of("/day");

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on("connection", function(socket){
  console.log("User = " + socket.id);
});

nameSpaceDay.on("connection", function(socket){
  nameSpaceDay.emit("dayInfo", "This day.");
});

nameSpaceWeek.on("connection", function(socket){
  nameSpaceWeek.emit("weekInfo", "This week.");
});

 
http.listen(3000, function(){
    console.log("Listening on port: 3000");
});

