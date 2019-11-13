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

	load() {
		let params = this.params;
		let xhr = new XMLHttpRequest();
		xhr.overrideMimeType("text/html");
		xhr.open('GET', this.path, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == "200") {
				// document.querySelector("viewroot").innerHTML = this.responseText;
				let parsedview = templateEngine.parse(this.responseText, params);
				document.querySelector("viewroot").innerHTML = parsedview;
				let title = document.querySelector("viewhead").querySelector("title");
				document.title = title.text;
			}
		};
		xhr.send(null);
	}

	loadRaw() {
		let xhr = new XMLHttpRequest();
		xhr.overrideMimeType("text/html");
		xhr.open('GET', this.path, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && xhr.status == "200") {
				document.querySelector("viewroot").innerHTML = this.responseText;
				let title = document.querySelector("viewhead").querySelector("title");
				document.title = title.text;
			}
		};
		xhr.send(null);
	}
}