// Import express app
import app from "../../loaders/express.mjs";
// Import path module
import path from "path";

// Handle route '/'
app.get('/', (req, res) => { 
    res.sendFile(
        // Root directory -> pages -> index.html
        path.resolve("pages", "index.html") 
    );
});