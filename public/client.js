//Get socket.io-client object (API is in HTML file)
const socket = io();

//Get HTML objects
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("input-message");
const messagesList = document.getElementById("messages");

//Add HTML Event Listeners
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  if (message) {
    socket.emit("chat message", message);
    messageInput.value = "";
  }
});

document.getElementById("delete").addEventListener("click", (e) => {
  console.log("Ok ready to delete all");
  socket.emit("delete messages");
});

//Add socket.io-client Event Listeners
socket.on("chat message", (message) => {
  const li = document.createElement("li");
  li.innerHTML = addEmoji(message);
  messagesList.appendChild(li);
});
