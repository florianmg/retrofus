const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const { addUser, removeUser, getUsersInRoom, getUser } = require("./users");
const PORT = process.env.PORT || 5050;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// helmet
// disables the `contentSecurityPolicy` middleware but keeps the rest.
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cors());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
app.use(router);

io.on("connection", (socket) => {
  socket.on("join", ({ roomName, userInfos }, callback) => {
    if (Object.keys(userInfos).length > 6 || Object.keys(userInfos).length < 5)
      return;
    const { error, user } = addUser({ id: socket.id, userInfos, roomName });

    if (error) return callback(error);

    socket.join(user.roomName);

    io.to(user.roomName).emit("roomData", getUsersInRoom(user.roomName));
    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.roomName).emit("roomData", getUsersInRoom(user.roomName));
    }
  });
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}.`));
