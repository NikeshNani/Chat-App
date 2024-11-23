const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const configureDB = require("./config/db");
const messageRoutes = require("./routes/messageRoutes");
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/messages", messageRoutes);


require('dotenv').config();
configureDB();

// Socket.IO connection
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("sendMessage", (data) => {
    io.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})