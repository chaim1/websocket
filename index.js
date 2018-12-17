var express = require('express');
var socket = require('socket.io');


//app setup
var app = express();
var server = app.listen(4000,function(){
    console.log('listening to requests on port 4000 ');
    
});


//static fils
app.use(express.static('public'));


//socket setup

var io = socket(server);


io.on('connection', function(socket){
    console.log('node socket connection',socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat', data);
    });

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data);
    });
});


