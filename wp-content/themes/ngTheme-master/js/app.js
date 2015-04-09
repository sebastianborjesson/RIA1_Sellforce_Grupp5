//app declaration and dependency injection
var app = angular.module("ngTheme", ["ngRoute", "ui.bootstrap"]);
//app config
app.config(["$routeProvider", "$locationProvider", "SITE_INFO", function($routeProvider, $locationProvider, SITE_INFO) {
  //route config
  $routeProvider
    .when("/", {
      templateUrl : SITE_INFO.partials+"views/home.html",
      controller : "pageController"
    })
    .when("/property/:name", {
      templateUrl : SITE_INFO.partials+"views/property.html",
      controller : "propertyController"
    })
    .when("/property/:name/images", {
      templateUrl : SITE_INFO.partials+"views/property_images.html",
      controller : "propertyController"
    })
     .when("/contact", {
      templateUrl : SITE_INFO.partials+"views/contact.html",
      controller : "contactController"
    })
     .when("/about-us", {
      templateUrl : SITE_INFO.partials+"views/about-us.html",
      controller : "pageController"
    })
    .otherwise({
      redirectTo: "/"
    });

  $locationProvider.html5Mode(true);
}])
.constant('SITE_INFO', myLocalized)
.constant('API_ROUTE', "wp-json")
.constant('META_VALUES', metaValues);
