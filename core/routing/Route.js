import { config } from "../../app/config/config.js";
import App from "../App.js";
import View from "../templating/View.js";

class Route {
	constructor(path, callback) {
		this.path = path;
		this.params = {};
		if (config && config.route.type === "hash") {
			
			if (this.path === "/") {
				this.path = "";
			}
			if (this.path) {
				this.path = this.path.replace("/", "#");
			}
		}
		this.callback = callback;
		this.router;
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
			if (path === "/") {
				path = "";
			}
			if (path) {
				path = path.replace("/", "#");
			}
		}

		for (const route of App.get.router.routes) {
			if (route.path === path) {
				return path;
			}
		}
		return this.link("/notfound");
	}
}

export default Route;