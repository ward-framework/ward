import Route from "../routing/Route.js";
import Component from "./Component.js";
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

	// Instantiate a new component
	scope.component = function(tag, name, params) {

		let component;

		if (typeof name !== 'string') {
			params = name;
			name = tag;
		}

		if (typeof params === 'object' && params !== null) {
			component = new Component(tag, name, params);
		}
		else {
			component = new Component(tag, name);
		}

		return component.load();
	}

	return scope;
}

export default helpers;