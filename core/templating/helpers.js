import Route from "../routing/Route.js";
import App from "../App.js";

function helpers(params) {

	let scope = params;
	
	// Helpers are registered here:

	// Get correct route path from url
	scope.link = function(url) {
		return Route.link(url);
	}

	// Get current location into a string
	scope.location = function() {
		return App.get.router.location();
	}

	return scope;
}

export default helpers;