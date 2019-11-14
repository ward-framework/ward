
// Init function called Onload
function init() {

	// Load config on start
	loadConfig(function(response) {

		config = JSON.parse(response);

		// Send "ConfigLoaded" event to window
		let event = new Event("ConfigLoaded");
		window.dispatchEvent(event);
	});

	// When config is loaded, init routes methods
	OnConfigLoaded(function() {

		// Change route on hash change
		if (config.route.type === "hash") {
			window.addEventListener('hashchange', function() {
				router.redirect(router.location());
			});	
		}

		// Load page if hash not changed (Direct link)
		router.redirect(router.location());
	});
}

// Add init to onload listener
OnReady(init);