import { config, loadConfig } from "/app/config/config.js";
import App from "/core/App.js";
import { OnAppLoaded, OnReady } from "/core/utility/load.js";

const app = App.get;

// Init function called Onload
function init() {

	// Load config on start
	loadConfig();
	// When config is loaded, init routes methods
	OnAppLoaded(function() {

		import("/app/routes/routes.js").then(() => {
			// Change route on hash change
			if (config.route.type === "hash") {
				window.addEventListener('hashchange', function() {
					app.router.redirect(app.router.location());
				});	
			}

			// Load page if hash not changed (Direct link)
			app.router.redirect(app.router.location());
		});
	});
}

// Add init to onload listener
OnReady(init);