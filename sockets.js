
module.exports = (io) => {
    io.on('connection', function(socket){
        console.log('a user connected');
        socket.on('disconnect', function(){
          console.log('User Disconnected');
        });
        socket.on('savedArticle', function(title){
            console.log(`"${title}" : SAVED`)
          io.emit('article', title);
          socket.broadcast.emit('article', title);
        // return id + " saved";
        });
      });
      io.listen(8000);
}