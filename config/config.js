
// Config location path (from index.html)
const configPath = '../config/config.json';

// Global config variable
let config;

// Load config file into config object variable
function loadConfig(callback) {   
	let xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open('GET', configPath, true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == "200") {
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}