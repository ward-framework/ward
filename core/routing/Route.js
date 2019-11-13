class Route {
	constructor(path, callback) {
		this.path = path;
		// this.name = queryName.slice(1);
		// this.element = document.querySelector(queryName);
		this.callback = callback;
	}

	check() {
		let routeReturn = this.callback.call();
		if (routeReturn instanceof View) {
			routeReturn.load();
			// document.querySelector("viewroot").innerHTML = `<object class="view" type="text/html" data="${routeReturn.path}">`
		}
	}
}