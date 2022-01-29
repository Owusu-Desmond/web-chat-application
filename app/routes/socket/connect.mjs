import io from "../../loaders/socket.mjs";

// Connecting users
let users = [];
// Whenever someone connects this gets executed
io.on('connection', socket => {
    // Current user
    let user;

    // Set username event
    socket.on('setUsername', data => {
        if (users.indexOf(data) > -1) 
            // User exists
            socket.emit('userExists', `"${data}" is 
                taken, please try another user name.`)
        else {
            // Set current user to data
            user = data;
            // Push to user list
            users.push(data);
            // Set user
            socket.emit('setUser', data);
        }
    });

    // If user disconnects
    socket.on("disconnect", () => 
        users = users.filter(v => v !== user)
    )
}); 