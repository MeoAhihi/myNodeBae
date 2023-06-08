const emobox = document.getElementById("emoji");
for (let index = 600; index < 650; index++) {
  const li = document.createElement("li");
  li.innerHTML = "1F" + index + ": " + "&#x1F" + index + ";";
  emobox.appendChild(li);
}
