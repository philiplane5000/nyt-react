const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// const sockets = require("./sockets")

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

// Socket.io
let server = require('http').createServer(app);
let io = require('socket.io').listen(server)
// sockets(io)
io.on('connection', function (socket) {
  console.log('a user connected');
  socket.on('disconnect', () => {
      console.log('User Disconnected');
  });
  socket.on('savedArticle', (title) => {
      console.log(`"${title}" : SAVED`)
      io.emit('article', title);
      socket.broadcast.emit('article', title);
      // return id + " saved";
  });
});

server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
});
// Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
