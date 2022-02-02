import io from "../../loaders/socket.mjs";

let users = [{userName : 'Admin', password : 'admin'}];
//Whenever someone connects this gets executed
io.on('connection', socket => {
    console.log('A user connected');
    // sign up user
    socket.on('signUp', (data) => { 
        // validation
        if(data.userName.length < 1){
            return socket.emit('emtyUsername', 'Username field is emty');
        }
        if(data.password.length < 8){
            return socket.emit('passwordStrength', 'Password length should be more than 7');
        }
        // change the first character of username to upper case
        data.userName = data.userName[0].toUpperCase() + data.userName.slice(1);
        console.log(data.userName);
        // loop through users stored data and check if user exit
        for(let i of users){
            // if username exit then username has already taken
            if(i.userName === data.userName){
                // user exit
                socket.emit('userExits', `${data.userName} user name is 
                taken try another name.`)
                  
            }else{
                // if username dont exit that is when the loop ends
                if(i == users[users.length - 1]){
                    // store user data
                    users.push(data);
                    // set user
                    socket.emit('setUser' , {username : data});
                    console.log(users); 
                }
            }

        }

    });
    // login user
    socket.on('login', (data) => { 
        // change the first character of username to upper case
        data.userName = data.userName[0].toUpperCase() + data.userName.slice(1);
        // loop through users stored data
        for(let i of users){
            // check if username exit
            if(i.userName === data.userName){
                console.log('username exit');
                console.log(data);
                // if username exit check if password match with username
                if(i.userName === data.userName && i.password === data.password){
                    // set user 
                socket.emit('setUser' , {username : data.userName});
                   
                } else{
                    // user password is incorrect
                    socket.emit('userPasswordIncorrect', `user name ${data.userName} and password do not match`);
                    return;
                }     
                
            }else{
                // if username dont exit that is when the loop ends
                if(i == users[users.length - 1]){
                    console.log('username dont exit');
                    socket.emit('userDontExit', `${data.userName} username dont exit.`)
                }
            }

        }

    });

}); 