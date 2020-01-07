import { config } from "../init/config.js";
import App from "../App.js";
import View from "../templating/View.js";

class Route {
	constructor(path, callback) {
		this.path = path;
		this.params = {};
		this.aliases = [];
		if (config && config.route.type === "hash") {
			if (this.path) {
				this.path = this.path.replace("/", "#/");
			}

			if (this.path === "#/") {
				this.alias("");
			}
		}
		this.callback = callback;
		this.router;
		this.name;
	}

	// Check route callback and handle it
	check() {
		let routeReturn = this.callback.call();

		// If view is returned load it
		if (routeReturn instanceof View) {
			routeReturn.load();
		}
	}

	static link(path) {
		if (config && config.route.type === "hash") {
			if (path) {
				path = path.replace("/", "#/");
			}
		}

		for (const route of App.get.router.routes) {
			if (route.name === path) {
				return route.path;
			}
			if (route.path === path) {
				return path;
			}
			else {
				for(const alias of route.aliases) {
					if (alias === path) {
						return path;
					}
				}
			}
		}
		return this.link("/notfound");
	}

	alias(path) {
		if (config && config.route.type === "hash") {
			if (path) {
				path = path.replace("/", "#/");
			}

			if (path === "/") {
				this.alias("");
			}
		}
		this.aliases.push(path);
		return this; // Return the route for chaining
	}

	name(name) {
		this.name = name;
		return this; // Return the route for chaining
	}
}

export default Route;