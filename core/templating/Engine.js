import getHelpers from "./helpers.js";

class templateEngine {

	// Parse template (content) with parameters
	static parse(content, params) {
		let scope = getHelpers(params);
		let re = /{#(.+?)#}/g,
			reExp = /(^\s*(if|for|else|switch|case|break|{|})).*/g,
			code = 'with(obj) { var r=[];\n',
			cursor = 0,
			result,
			match;
		let add = function (line, js) {
			js ? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
				(code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
			return add;
		}
		while (match = re.exec(content)) {
			add(content.slice(cursor, match.index))(match[1], true);
			cursor = match.index + match[0].length;
		}
		add(content.substr(cursor, content.length - cursor));
		code = (code + 'return r.join(""); }').replace(/[\r\t\n]/g, ' ');
		try {
			result = new Function('obj', code).apply(scope, [params]);
			console.log(result.toString());
		}
		catch (err) {
			console.error(err.message, "falling back to raw content.");
			return content;
		}
		return result;
	};
};

export default templateEngine;