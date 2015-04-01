//"ngTheme" home controller.
//dependent on $scope && WPService being injected to run
app.controller("homeController", ["$scope", "Pages", "Property", "$sce", "SITE_INFO", "$routeParams", "$location", function($scope, Pages, Property, $sce, SITE_INFO, $routeParams, $location) {
  console.log("homeController alive!");
  console.log("routeParams: ", $routeParams);
  //get all pages
  Pages.get();
  Property.find($routeParams);

  $scope.partialsDir = SITE_INFO.partials;

  $scope.propertyFilters = {
    type: {
      apartment : true,
      house : true
    },
    region: {
      skane : true,
      halland : true,
      vastragotaland : true
    },
    askingPrice : [],
    monthlyFee : [],
    grossInternalArea : [],
    rooms : [],
    elevator : "",
    balcony : "",
  };

  $scope.resetPropertyFilters = function() {
    $scope.propertyFilters = {
      type: {
        apartment : false,
        house : false
      },
      region: {
        skane : false,
        halland : false,
        vastragotaland : false
      },
      askingPrice : [],
      monthlyFee : [],
      grossInternalArea : [],
      rooms : [],
      elevator : "",
      balcony : "",
    };
  };

  $scope.$on("foundProperty", function(event, data) {
    console.log("homeController on foundProperty: ", data);
    $scope.searchModels = data;
  });

  $scope.goTo = function(url) {
    $location.url(url);
  };

  // EXAMPLE LISTENER TO A $broadcast COMING FROM WPRest SERVICE!!!
  //listening for the "gotPageData" broadcast on $http success
  $scope.$on("gotPageData", function(event, data) {
    console.log("homeController on gotPageData: ", data);

    /* 
      angular protects us from "dangerous" HTML by converting it to a string

      if we want to show HTML from a string in DOM 
      we first need to tell angular that it can be trusted.
      
      this is done using the $sce service on the HTML string in JS
      and the ng-bind-html directive in the view
    */
    $scope.trustedHtml = $sce.trustAsHtml(data[0].content);
  });
  
}]);