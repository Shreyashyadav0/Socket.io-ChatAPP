var socket = io();
 
var userlist = document.getElementById("active_users_list");
var roomlist= document.getElementById("active_rooms_list");
var message = document.getElementById("messageInput");
var sendMessageBtn = document.getElementById("messageInput");
var roomInput = document.getElementById("roomInput");
var createRoomBtn = document.getElementById("room_add_icon_holder");
const chatDisplay = document.getElementById("chat");

var currentRoom = "globalChat";
var myUsername = "";

socket.on("connect", function() {
    myUsername= prompt("Enter name");
    socket.emit("createUser", myUsername);
})



