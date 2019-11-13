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

	register(route) {
		this.routes.push(route);
	}

	location() {
		return window.location.hash;
	}

	redirect(path) {
		if (!this.current || path !== this.current.path) {
			let found = false;
			for (let route of this.routes) {
				if (route.path === path) {
					found = true;
					route.check();
					this.current = route;
					window.location.hash = path;
					var event = new CustomEvent('redirected', { detail: { route: this.current }});
					document.dispatchEvent(event);
					if (!this.options.muted) {
						console.log("Redirected from router :", this);
					}
				}
			}
			if (!found && !this.options.muted) {
				console.log("Cannot find route in routes :", this.routes);
				this.redirect("#PageNotFound");
			}
		}
	}

	// redirect(name) {
		
	// }
}