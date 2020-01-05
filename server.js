// Include the package
const Server = require('ward-server');

// Create a Server instance
const server = new Server({
	path : __dirname
});

// Serve files
server.serve();