// Add func to "DOMContentLoaded" event queue
function OnReady(func) {
	window.addEventListener("DOMContentLoaded", func);
}
// Add func to "load" event queue
function OnLoad(func) {
	window.addEventListener("load", func);
}

function OnConfigLoaded(func) {
	window.addEventListener('ConfigLoaded', func);
}

function OnAppLoaded(func) {
	window.addEventListener('AppLoaded', func);
}

function loadJSON(path, callback, err) {
	let xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open('GET', path, true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == "200") {
			callback(xhr.responseText);
		}
		else {
			if (err)
				err();
		}
	};
	xhr.send(null);  
}

export { OnReady, OnLoad, OnConfigLoaded, OnAppLoaded, loadJSON };