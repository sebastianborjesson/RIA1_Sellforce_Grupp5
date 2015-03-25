app.factory("Property", ["WPRest", "$sce", function(WPRest, $sce) {

	var propertyServant = {
		find : function(searchParameters) {
			searchParameters = searchParameters ? searchParameters : {};

			var callUrl = "/posts?filter[category_name]=properties";

			for(var i in searchParameters) {
				callUrl += "&filter["+i+"]="+searchParameters[i];
			}
			console.log("Found property posts: ", callUrl);

			WPRest.restCall(callUrl, "GET", {}, {
				broadcastName : "aBroadcast", //not important

				callback : function(postData) {
					if(!postData) {
						return;
					}
					console.log("Post data: ", postData);

					var results = [];

					var count = 0;
					
					postData.forEach(function(post) {
						var last = count === postData.length-1;

						if(!post.terms.property) {
							return;
						}

						post.excerpt = $sce.trustAsHtml(post.excerpt);
						post.content = $sce.trustAsHtml(post.content);

						var propertyTag = post.terms.property[0].slug;

						var mediaCallUrl = "/media?filter[property]="+propertyTag;
						console.log("Found property media", JSON.stringify(mediaCallUrl)); //JSON.stringify(mediaCallUrl)

						WPRest.restCall(mediaCallUrl, "GET", {}, {
							broadcastName : last ? "foundProperty" : "notDone",

							callback : function(mediaData) {
								console.log("Found property media data: ", mediaData);
								
								results.push({
									"media" : mediaData,
									"post" : post,
									"propertyData" : post.property_data
									
								});

								if(last) {
									return results;
								}
							}
						});
						count++;
					});
				}
			});
		}
	};
	return propertyServant;
}]);