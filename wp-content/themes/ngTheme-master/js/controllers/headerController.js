app.controller("headerController", ["$scope", "$location", "Menus", "SITE_INFO", function($scope, $location, Menus, SITE_INFO) {
  console.log("headerController is alive!");

  $scope.partialsDir = SITE_INFO.partials;

  Menus.get(7); //Our "Main Menu" in WP has id 7

  $scope.$on("gotMenuLinks", function(event, data) {
  	console.log("headerController on gotMenuLinks: ", data);
  	$scope.menuLinks = data.items;
  });

  $scope.goTo = function(url, hardReload) {
  	if(hardReload) {
  		url = url.indexOf("/") === 0 ?
  			SITE_INFO.http_root + url.substr(1) :
  			SITE_INFO.http_root + url;

  		window.location.href = url;
  		return;
  	}

  	$location.url(url);
  }

}]);