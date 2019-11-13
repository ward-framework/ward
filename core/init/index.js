

// Add func to "DOMContentLoaded" event queue
function OnLoad(func) {
	window.addEventListener("DOMContentLoaded", func);
}
// Add func to "load" event queue
function OnReady(func) {
	window.addEventListener("load", func);
}

let router = new Router([], {muted: false});

// Init function called Onload
function init() {

	// Load config on start
	loadConfig(function(response) {

		config = JSON.parse(response);

		// Send "ConfigLoaded" event to window
		let event = new Event("ConfigLoaded");
		window.dispatchEvent(event);
	});

	// When config is loaded init routes methods
	window.addEventListener('ConfigLoaded', function() {

		// Change route on hash change
		window.addEventListener('hashchange', function() {
			router.redirect(router.location());
		});

		// Load page if hash not changed (Direct link)
		router.redirect(router.location());
	});
}

// Add init to onload listener
OnLoad(init);