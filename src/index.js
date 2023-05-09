const http = require('http');
const port = process.env.port || 4000;
const app = require('./app');

// Add listener function to the server
const server = http.createServer(app);

// Start server
server.listen(port);