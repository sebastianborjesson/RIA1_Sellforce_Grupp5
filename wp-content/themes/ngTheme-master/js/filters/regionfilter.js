app.filter('regionFilter', function() {
  return function (properties, region) {
    if (!properties) { return; }
    
    /*
      region: {
        skane : false,
        halland : false,
        vastragotaland : false
      },
    */

    var notApplicable = true;
    for (var i in region) {
      if (typeof region[i] == "boolean") {
        notApplicable = false;
      }
    }

    if (notApplicable) { return properties; }

    var filtered = [];
    
    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];

      for (var j in region) {
        if (
          region[j] &&
          j == property.propertyData.region
        ) {

          filtered.push(property);
        }
      }
    }
    

    return filtered;
  };
});