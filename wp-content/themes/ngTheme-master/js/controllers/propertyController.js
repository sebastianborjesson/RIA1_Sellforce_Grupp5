app.controller("propertyController", ["$scope", "Property", "$routeParams", "SITE_INFO", "$location", function($scope, Property, $routeParams, SITE_INFO, $location) {
	$scope.goTo = function(url) {
    $location.url(url);
  };

	console.log("propertyController is alive! routeParams: ", $routeParams);

	Property.find($routeParams);
	$scope.partialsDir = SITE_INFO.partials;
  $scope.gotoImages = function(){
		$scope.goTo($location.$$path + "/images");

	//$scope.goTo($location.$path.replace(/\/images/g,""));
  };
  $scope.goBack = function() {
		$scope.goTo($location.$$path.replace(/\/images/g,""));
  };

  //var pageNo = 1;
	$scope.$on("foundProperty", function(event, data) {
		console.log("propertyController on foundProperty: ", data);

		if(!data) {
			return;
		}
		$scope.property = data[0];

    //pageNo++;
    //Property.find($routeParams, pageNo);
	});


	
}]);