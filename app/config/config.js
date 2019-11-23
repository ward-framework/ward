import { loadJSON } from "../../core/utility/load.js";

// Config location path (from index.html)
const configPath = '../app/config/config.json';

// Global config variable
let config;

// Load config file into config object variable
function loadConfig() {
	loadJSON(configPath, function(response) {
		config = JSON.parse(response);

		// Send "ConfigLoaded" event to window
		let event = new Event("ConfigLoaded");
		window.dispatchEvent(event);
	});
}

export { config, loadConfig };