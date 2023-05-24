const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const port = 3000; // hoặc cổng tuỳ chọn
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
  
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
