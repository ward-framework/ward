
let config;

// Load config file into config object variable
function loadConfig(callback) {   
	let xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open('GET', './config/config.json', true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == "200") {
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}

OnLoad(loadConfig);