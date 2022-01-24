import io from "../../loaders/socket.mjs";

//Whenever someone connects this gets executed
io.on('connection', socket => {
    console.log('An user connected');

    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});