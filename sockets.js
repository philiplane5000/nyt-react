const socketPORT = process.env.PORT || 8000;

module.exports = (io) => {
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
    io.listen(socketPORT);
}