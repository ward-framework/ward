const Server = require('ward-server');

// Create a Server instance
const server = new Server({
	path : __dirname,
	port: process.env.PORT || 8000,
});

// Serve files
server.serve();