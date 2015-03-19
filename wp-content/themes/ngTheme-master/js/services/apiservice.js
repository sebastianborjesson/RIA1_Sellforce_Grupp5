//a "core" service that handles all rest calls to WordPress
app.service("WPRest", ["$http", "$rootScope", "SITE_INFO", "API_ROUTE", function($http, $rootScope, SITE_INFO, API_ROUTE) {
  var APIPath = SITE_INFO.http_root + API_ROUTE;
  console.log("APIPath: ", APIPath);

  //in a .service() service this syntax is preferred
  this.restCall = function(url, method, data, broadcastObject) {
    //using the "real" $http, instead of shorthands such as $http.get() etc.
    $http({
      url: APIPath + url,
      method: method,
      data: data,
      responseType: "json"
    }).success(function(data) {
      console.log("WPRest restCall success: ", data, " now broadcasting on: ", broadcastObject);

      if(typeof broadcastObject == "object") {
        $rootScope.$broadcast(
          broadcastObject.broadcastName, 
          broadcastObject.callback(data)
        );
      } else {
        broadcastObject = broadcastObject ? broadcastObject : "restSuccess";
        $rootScope.$broadcast(broadcastObject, data);
      }
    });
  };

}]);