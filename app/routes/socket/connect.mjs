import io from "../../loaders/socket.mjs";

var client = 0;
//Whenever someone connects this gets executed
io.on('connection', socket => {
    console.log('A user connected');
    // send the new user a welcome message and update the other clients about him/her joining
    client++;
     
    socket.emit('newclientconnect', {discription : "Hey welcome"})
    socket.broadcast.emit('newclientconnect', {discription : client + " users connected"})

    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', () => {
        client--;
        socket.broadcast.emit('newclientconnect', {discription : client + " users connected"})
    });
}); 