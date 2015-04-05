//"ngTheme" home controller.
//dependent on $scope && WPService being injected to run
app.controller("homeController", ["$scope", "Pages", "Property", "$sce", "SITE_INFO", "$routeParams", "$location", "META_VALUES", function($scope, Pages, Property, $sce, SITE_INFO, $routeParams, $location, META_VALUES) {
   console.log("homeController alive!");
   console.log("routeParams: ", $routeParams);
   //get all pages
   Pages.get();
   Property.find($routeParams);

   $scope.partialsDir = SITE_INFO.partials;

   console.log("META_VALUES", META_VALUES);

   $scope.propertyFields = {};
   var objectsForFilters = {};
   function forFilterSetup() {

      for(var i in META_VALUES) {
         objectsForFilters[i] = {};

         var tempObj = META_VALUES[i].reduce(function (obj, val) {

            objectsForFilters[i][val] = true;
            obj[val] = {
               id: val, 
               value: 1
            };
            return obj;
         }, {});

         $scope.propertyFields[i] = {
            id: i,
            data: tempObj
         };
      }
   }
   forFilterSetup();
   console.log("propertyFields: ", $scope.propertyFields);
   console.log("objectsForFilters: ", objectsForFilters);

   $scope.citySearchFields = {
      propertyData : {
         city: ""
      }
   };

   $scope.propertyFilters = {
      type: objectsForFilters.type,
      region: objectsForFilters.region,
      city: objectsForFilters.city,
      askingPrice : [],
      monthlyFee : [],
      grossInternalArea : [],
      rooms : [],
      elevator : "",
      balcony : ""
   };

   console.log("propertyFilters: ", $scope.propertyFilters);

   $scope.resetPropertyFilters = function() {

      $scope.citySearchFields = {
         propertyData : {
            city: ""
         }
      };

      forFilterSetup();
      $scope.propertyFilters = {
         type: objectsForFilters.type,
         region: objectsForFilters.region,
         city: objectsForFilters.city,
         askingPrice : [],
         monthlyFee : [],
         grossInternalArea : [],
         rooms : [],
         elevator : "",
         balcony : ""
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