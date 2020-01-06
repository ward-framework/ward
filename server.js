// Include the package
const Server = require('ward-server');

// Create a Server instance
const server = new Server({
	path : __dirname,
	port: process.env.PORT || 8000,
	ip: "0.0.0.0"
});

// Serve files
server.serve();