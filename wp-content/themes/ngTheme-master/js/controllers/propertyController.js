app.controller("propertyController", ["$scope", "Property", "$routeParams", "SITE_INFO", function($scope, Property, $routeParams, SITE_INFO) {
	
	console.log("propertyController is alive! routeParams: ", $routeParams);

	Property.find($routeParams);
	$scope.partialsDir = SITE_INFO.partials;

	$scope.$on("foundProperty", function(event, data) {
		console.log("propertyController on foundProperty: ", data);

		if(!data) {
			return;
		}
		$scope.property = data[0];
	});

}]);
app.filter('capitalize', function() {
  return function(data) {
      if (data!=null)
          return data.substring(0,1).toUpperCase()+data.substring(1);
  };
});