const socket = io();
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
  li.innerHTML = addEmoji(message);
  messagesList.appendChild(li);
});

function addEmoji(message) {
  // Replace emoji shortcuts with corresponding HTML entities
  const emojiMap = {
    ":)": "&#x1F603;",
    // ":D": "&#x1F604;",
    ':(': '&#x1F61E;',
    ":]": "\u{1F600}", // Mặt cười
    ":')": "\u{1F601}", // Mặt cười với nước mắt
    ":D": "\u{1F603}", // Mặt cười với răng
    // Add more emoji mappings as needed
  };
  Object.keys(emojiMap).forEach((emoji) => {
    const regex = new RegExp(
      emoji.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
      "g"
    );
    message = message.replace(regex, emojiMap[emoji]);
  });
  return message;
}
