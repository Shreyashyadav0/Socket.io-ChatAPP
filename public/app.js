var socket = io();
 
var userlist = document.getElementById("active_users_list");
var roomlist= document.getElementById("active_rooms_list");
var message = document.getElementById("messageInput");
var sendMessageBtn = document.getElementById("send_message_btn");
var roomInput = document.getElementById("roomInput");
var createRoomBtn = document.getElementById("room_add_icon_holder");
const chatDisplay = document.getElementById("chat");

var currentRoom = "globalChat";
var myUsername = "";

socket.on("connect", function() {
    myUsername= prompt("Enter name");
    socket.emit("createUser", myUsername);
});
 
sendMessageBtn.addEventListener('click',function(){
    socket.emit('sendMessage', message.value);
    message.value=""
})//here we are just adding evetlishner on the send button and sending the 
//value and the again making it empty

socket.on("updateChat", function(username, data){
    if (username === "INFO"){
        chatDisplay.innerHTML  += `<div class ='announcement'><span>${data}</span></div>`
    }else{
        console.log("Displaying user message");
        chatDisplay.innerHTML += `<div class="message_holder ${
          username === myUsername ? "me" : ""
        }">
                                    <div class="pic"></div>
                                    <div class="message_box">
                                      <div id="message" class="message">
                                        <span class="message_name">${username}</span>
                                        <span class="message_text">${data}</span>
                                      </div>
                                    </div>
                                  </div>`;
      }
    
      chatDisplay.scrollTop = chatDisplay.scrollHeight;// we want to display the chat at the bottom

    });
