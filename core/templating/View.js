import { config } from "../init/config.js";
import templateEngine from "./Engine.js";

class View {
	constructor(name, params) {
		this.name = name;
		this.path = `${config.path.views}${this.name}.ward.html`;
		if (params) {
			this.params = params;
		}
		else {
			this.params = {};
		}
	}

	// Load parsed template view into "viewroot"
	load() {
		let params = this.params;
		let xhr = new XMLHttpRequest();
		xhr.overrideMimeType("text/html");
		xhr.open('GET', this.path, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == "200") {

				// Parse view template
				let parsedview = templateEngine.parse(this.responseText, params);

				// Load parsed html into viewroot element
				document.querySelector("viewroot").innerHTML = parsedview;

				// Change page title with view title
				let title = document.querySelector("viewhead").querySelector("title");
				document.title = title.text;
			}
		};
		xhr.send(null);
	}

	// Load raw html view into "viewroot"
	loadRaw() {
		let xhr = new XMLHttpRequest();
		xhr.overrideMimeType("text/html");
		xhr.open('GET', this.path, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == "200") {

				// Load html into viewroot element
				document.querySelector("viewroot").innerHTML = this.responseText;

				// Change page title with view title
				let title = document.querySelector("viewhead").querySelector("title");
				document.title = title.text;
			}
		};
		xhr.send(null);
	}
}

export default View;