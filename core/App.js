import { config } from "../app/config/config.js";
import Router from "./routing/Router.js";
import { OnConfigLoaded } from "./utility/load.js";

const app = Symbol();
const singletonEnforcer = Symbol();

class App {
	constructor(enforcer) {
		if (enforcer !== singletonEnforcer) {
			throw new Error('Cannot construct App');
		}
		
		OnConfigLoaded(function() {
			// Define app router
			const options = config.mode === "DEV" ? {muted:false} : {muted:true};
			this.router = new Router([], options);

			// Send "AppLoaded" event to window
			let event = new Event("AppLoaded");
			window.dispatchEvent(event);
		}.bind(this));
	}

	static get get() {
		if (!this[app]) {
			this[app] = new App(singletonEnforcer);
		}

		return this[app];
	}
}

export default App;