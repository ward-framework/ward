class Router {
	constructor(routes, options) {
		if (options && Object.entries(options).length >= 0 && options.constructor === Object) {
			this.options = options;
		}
		else {
			this.options = {
				muted: true, // If false message at each redirect.
			};
		}

		if (routes) {
			this.routes = routes;
		}
		else {
			this.routes = [];
		}

		this.current;

		this.routes.push(new Route("#PageNotFound", function() {
			return new View("404");
		}));
	}

	// Register a route to router
	register(route) {
		this.routes.push(route);
	}

	// Get current location hash
	location() {
		return window.location.hash;
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
					window.location.hash = path;

					// Send "redirected" Event when redirect is successful
					var event = new CustomEvent('redirected', { detail: { route: this.current }});
					document.dispatchEvent(event);

					// Send console message if not muted
					if (!this.options.muted) {
						console.log("Redirected from router :", this);
					}
				}
			}

			// Send "not found" message if not muted
			if (!found && !this.options.muted) {
				console.log("Cannot find route in routes :", this.routes);
				this.redirect("#PageNotFound");
			}
		}
	}
}