# Socket.io-ChatAPP
Day12 Backend| Socket.io
Live/realtime  -> Sockets
 server can send the data to client 
client can send the data to server
Send - emit()
receive - On()

Here we are going to make the chat app where therese will be erooms
are if any person join the chat we can talk to them]
{8 min of video}
first we imported some css file then we wrote out html file just basic cruks of it and then we entered teh 
socket.io in the html script 
in app.js we have frontend code and in server.js we have backend code
ok socket.io is something like routes but much faster actually
we can just on and emit and that it and i think these things makese sense for chats 


we have out socket.io
we have put it in script.js in html
we have socket.on which give promts the function Enter the name
and entering the name we emit createUser with the name that they have emmitted
this create username will go in server side and we give the name and we have global varible 
username and we join the globalChat and emit the updateChat , INFO with message "You have joined the globalChat"

then we receive the data in socket.on("updateChat", function(username, data){
    if (username === "INFO"){
        chatDisplay.innerHTML= `<div class ='announcement'><span>${data}</span></div>`
    }
})

and update it in the div class
