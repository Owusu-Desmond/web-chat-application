// Import express app generator
import express from "express";

// Create the express app
const app = express();

// Some configs here
app.use(express.static("public"));

// Export the express application
export default app;