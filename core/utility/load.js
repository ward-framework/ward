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