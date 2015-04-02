app.factory("Menus", ["WPRest", "SITE_INFO", function(WPRest, SITE_INFO) {

	function buildMenuTree(menuLinkArray) {
		var menuTree = [];

		menuLinkArray.sort(function(x,y) {
			return x.order > y.order;
		});

		var hash = {};

		menuLinkArray.forEach(function(menuLink) {
			menuLink.children = [];
			menuLink.url = menuLink.url.replace(SITE_INFO.http_root, "");

			hash["_"+menuLink.ID] = menuLink;

			if(menuLink.parent === 0) {
				menuTree.push(menuLink);
				return;
			}

		});

		for(var i in hash) {
			menuLink = hash[i];

			if(menuLink.parent === 0) {
				continue;
			}

			hash["_"+menuLink.parent].children.push(menuLink);
		}
		console.log("Menu tree: ", menuTree);
		return menuTree;
	}

	function buildMenu(menuObject) {
		menuObject.items = buildMenuTree(menuObject.items);
		return menuObject;
	}

	var menuServant = {
		get : function(menuId) {
			var callUrl = menuId ? "/menus/"+menuId : "/menus";

			var broadcastObject = menuId ?
				{
					broadcastName : "gotMenuLinks",
					callback: buildMenu
				} :
				"gotMenus";

			WPRest.restCall(callUrl, "GET", {}, broadcastObject);
		}
	};

	return menuServant;
}]);