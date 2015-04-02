app.factory("Property", ["WPRest", "$sce", function(WPRest, $sce) {
	var results = [];

	var propertyServant = {
		find : function(searchParameters, pageNo, startOver) {
			searchParameters = searchParameters ? searchParameters : {};
			pageNo = pageNo ? pageNo : 1;
			var callUrl = "/properties?page="+pageNo;

			if (startOver || pageNo === 1) {
				results.length = 0;
			}

			for(var i in searchParameters) {
				if (searchParameters[i].constructor.name != "Object") {
					callUrl += "&filter["+i+"]="+searchParameters[i];
				}
				else {
					for (var j in searchParameters[i]) {
						callUrl += "&filter["+i+"]["+j+"]="+searchParameters[i][j];
					}
				}
			}

			console.log("Found property posts: ", callUrl);

			WPRest.restCall(callUrl, "GET", {}, {
				broadcastName : "aBroadcast", //not important

				callback : function(postData) {
					if(!postData) {
						return;
					}
					console.log("Post data: ", postData);


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