// Import the http server
import http from "./app/loaders/http.mjs";
// Load modules
import "./app/load.mjs";

// Go to http://localhost
http.listen(80);