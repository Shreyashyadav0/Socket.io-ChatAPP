const express = require("express");
const http = require("http");
const {Server} = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express .static('public'));

const usernames = {}
const rooms = [
    { name:"globalChat", creator:"anonymous"},
    {name: "chess", creator: "anonymous"},
    {name: "javascript", creator:"anonymous"},
]

io.on("connection", function(socket){ // we have to write everything in io.on in backend side but we can write write in frontend

    socket.on("createUser", function(username){
        socket.username = username;
        usernames[username]= username;
        socket.currentRoom ="globalChat";
         
        socket.join("globalChat");
        socket.emit("updateChat", "INFO", "You have joined global chat")
    });
    socket.on("sendMessage", function(data){
        io.sockets.to(socket.currentRoom).emit("updateChat", socket.username, data)
    })//  as well we used out global io and send the message to to perticular
   //room
})



server.listen(4000,function() {
    console.log('server is running at port 4000');
})