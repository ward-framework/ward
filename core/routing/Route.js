class Route {
	constructor(path, callback) {
		this.path = path;
		this.callback = callback;
	}

	// Check route callback and handle it
	check() {
		let routeReturn = this.callback.call();

		// If view is returned load it
		if (routeReturn instanceof View) {
			routeReturn.load();
		}
	}
}