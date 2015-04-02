app.filter("toTitleCase", function() {
	return function (string) {
	   	string = string.split('_').join(' ');
	   	return string.replace(/\w\S*/g, function(txt) {
	      	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	   	});
	}
});