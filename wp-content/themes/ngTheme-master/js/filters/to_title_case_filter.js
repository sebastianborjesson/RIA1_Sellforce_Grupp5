app.filter("toTitleCase", function() {
	return function (string) {
		if(string != undefined) {
	   	string = string.split('_').join(' ');
	   	return string.replace(/\w\S*/g, function(txt) {
	      	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	   	});
	   }
	}
});