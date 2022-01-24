// Import server constructor
import { Server } from "socket.io";
// Import http server
import http from "./http.mjs";

// Create the socket server
const io = new Server(http);

// Export the socket server
export default io;