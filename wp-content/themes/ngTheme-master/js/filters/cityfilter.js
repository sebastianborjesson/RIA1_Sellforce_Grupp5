app.filter('cityFilter', function() {
  return function (properties, city) {
    if (!properties) { return; }
    
    var notApplicable = true;
    for (var i in city) {
      if (typeof city[i] == "boolean") {
        notApplicable = false;
      }
    }

    if (notApplicable) { return properties; }

    var filtered = [];
    
    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];

      for (var j in city) {
        if (
          city[j] &&
          j == property.propertyData.city
        ) {

          filtered.push(property);
        }
      }
    }
    

    return filtered;
  };
});