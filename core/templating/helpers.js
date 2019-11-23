import Route from "/core/routing/Route.js";

function helpers(params) {

	let scope = params;
	
	// Helpers are registered here:

	// Get correct route path from url
	scope.link = function(url) {
		return Route.link(url);
	}



	return scope;
}

export default helpers;