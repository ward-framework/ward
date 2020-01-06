import { config } from "../init/config.js";
import templateEngine from "./Engine.js";

class Component {
	constructor(tag, name, params) {
		this.tag = tag;
		this.name = name;
		this.path = `${config.path.views}${this.name}.ward.html`;
		if (params) {
			this.params = params;
		}
		else {
			this.params = {};
		}
		this.content = "";
	}

	load() {
		let params = this.params;
		let path = this.path;
		let component = this;
		let xhr = new XMLHttpRequest();
		xhr.overrideMimeType("text/html");
		xhr.open('GET', this.path, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == "200") {

				// Parse view template and adds it to the document
				document.querySelector(component.tag).innerHTML = templateEngine.parse(this.responseText, params);
			}
			if (this.status != 200) {
				throw Error("Cannot load component from " + path)
			}
		};
		xhr.send(null);
		return document.createElement(this.tag).outerHTML;
	}

	// Load raw html view into "viewroot"
	loadRaw() {
		let xhr = new XMLHttpRequest();
		xhr.overrideMimeType("text/html");
		xhr.open('GET', this.path, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == "200") {
				// Adds raw content to page
				document.querySelector(component.tag).innerHTML = this.responseText;
			}
		};
		xhr.send(null);
	}
}

export default Component;