// Import module HTTP
import http from "http";
// Import express app
import app from "./express.mjs";

// Create the HTTP server
const server = http.createServer(app);

// Export HTTP server
export default server;