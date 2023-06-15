const emobox = document.getElementById("emoji");
for (let index = 600; index < 650; index++) {
  const li = document.createElement("li");
  li.innerHTML = "1F" + index + ": " + "&#x1F" + index + ";";
  emobox.appendChild(li);
}

function addEmoji(message) {
  // Replace emoji shortcuts with corresponding HTML entities
  const emojiMap = {
    ":)": "&#x1F603;",
    // ":D": "&#x1F604;",
    ":(": "&#x1F61E;",
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
