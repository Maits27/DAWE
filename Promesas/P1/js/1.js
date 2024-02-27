function upperCaseAsync(s) {
	return new Promise((resolve, reject) => {
		if (s!==null) {
			resolve(s.toUpperCase());
		} else {
			reject();
		}
	});
}


window.onload = function() {
	upperCaseAsync("adrian").then(console.log);
	upperCaseAsync(null).catch((x) => {
		console.log("Error: No se ha introducido un string");
	});
}