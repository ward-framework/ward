class View {
	constructor(name, params) {
		this.name = name;
		this.path = `${config.path.views}${this.name}.html`;
		this.params = params;
	}

	load() {
		var xhr = new XMLHttpRequest();
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