//Get Express Framework object
const express = require("express");
const app = express();

//Get socket.io object for server
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = 3000; // hoặc cổng tuỳ chọn


//Setup Router aka HTTP request listeners
http.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/chat.html");
});

//Add socket.io Event Listeners for server
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("chat message", (message) => {
    console.log("Received message:", message);
    io.emit("chat message", message);
  });

  socket.on("delete messages", () => {
    const mm = require("./messagesManipulation");
    mm.showMessages();
  });
});