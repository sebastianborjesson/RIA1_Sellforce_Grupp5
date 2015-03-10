app.factory("menus", ["WPRest", function(WPRest) {
  
  function createMenuTree(menuLinkArr) {

  }

  function prepeareMenu(menuObj) {
    menuObj.items = createMenuTree(menuObj.items);

    return menuObj;
  }

  var menuServant = {
    get : function(menuId) {
      var callUrl = menuId ? "/menus/" + menuId : "/menus";

      WPRest.restcall(callUrl, 'GET', {}, {
        broadcastName : "gotMenuLinks",
        callback: prepareMenu
      });
    }
  };

  return menuServant;

}]);