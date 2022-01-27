import io from "../../loaders/socket.mjs";

var client = 0;
let users = ['admin'];
//Whenever someone connects this gets executed
io.on('connection', socket => {
    console.log('A user connected');
    
    socket.on('setUsername', (data) => {
        for(let i of users){
            if(i === data ){
                socket.emit('userExits', `${data} username is 
                taken try another user name.`)
                
            }
        }
         users.push(data);
         socket.emit('setUser' , {username : data});
        console.log(users);
    });
}); 