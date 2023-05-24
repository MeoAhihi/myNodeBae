const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("input-message");
const messagesList = document.getElementById("messages");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  if (message) {
    socket.emit("chat message", message);
    messageInput.value = "";
  }
});

socket.on("chat message", (message) => {
  const li = document.createElement("li");
  li.textContent = message;
  messagesList.appendChild(li);
});
