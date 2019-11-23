import { config } from "/app/config/config.js";
import Route from "./Route.js";
import View from "/core/templating/View.js";

class Router {
	constructor(routes, options) {
		if (options && Object.entries(options).length >= 0 && options.constructor === Object) {
			this.options = options;
		} else {
			this.options = {
				muted: true, // If false message at each redirect.
			};
		}

		if (routes) {
			this.routes = routes;
		} else {
			this.routes = [];
		}

		this.current;

		this.routes.push(new Route("/notfound", function () {
			return new View("404");
		}));
	}

	// Register a route to router
	register(route) {
		this.routes.push(route);
		route.router = this;
	}

	// Get current location hash
	location() {
		if (config && config.route.type === "hash") {
			return window.location.hash;
		}
	}

	setLocation(path) {
		if (config && config.route.type === "hash") {
			window.location.hash = path;
		}
	}

	// Check route on path
	redirect(path) {
		if (!this.current || path !== this.current.path) {
			let found = false;
			for (let route of this.routes) {
				if (route.path === path) {
					found = true;

					// Check route
					route.check();
					this.current = route;
					this.setLocation(path);

					// Send "redirected" Event when redirect is successful
					var event = new CustomEvent('redirected', {
						detail: {
							route: this.current
						}
					});
					document.dispatchEvent(event);

					// Send console message if not muted
					if (!this.options.muted) {
						console.log("Redirected from router :", this);
					}
				}
			}

			// Send "not found" message if not muted
			if (!found && !this.options.muted) {
				console.log("Cannot find route in routes :", path, this.routes);
				this.redirect(Route.link("/notfound"));
			}
		}
	}
}

export default Router;