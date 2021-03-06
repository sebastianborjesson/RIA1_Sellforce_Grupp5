app.controller("headerController", ["$scope", "$location", "Menus", "SITE_INFO", function($scope, $location, Menus, SITE_INFO) {
  console.log("headerController is alive!");

  $scope.partialsDir = SITE_INFO.partials;

  Menus.get(7); //Our "Main Menu" in WP has id 7

  $scope.isCollapsed = true;

  $scope.navCollapse = function() {
    $scope.isCollapsed = !$scope.isCollapsed;
  };

  $scope.$on("gotMenuLinks", function(event, data) {
    console.log("headerController on gotMenuLinks: ", data);
    $scope.menuLinks = data.items;
  });

  $scope.goTo = function(url, hardReload) {
    if(url.indexOf("http://") === 0 || url.indexOf("https://") === 0) {
      window.open(url);
      return;
    }
    if(hardReload) {
      console.log("url: ", url);
      
      url = url.indexOf("/") === 0 ?
        SITE_INFO.http_root + url.substr(1) :
        SITE_INFO.http_root + url;

      window.location.href = url;
      return;
    }

    $location.url(url);
  };

}]);