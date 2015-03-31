app.filter('propertyType', function() {
  return function (properties, type) {
    if (!properties) { return; }
    /*
      type: {
        Apartment : true,
        House : true,
        Cottage : true
      },
    */

    // var notApplicable = true;
    // for (var i in type) {
    //   if (typeof type[i] == "false") {
    //     notApplicable = true;
    //   }
    // }

    // if (notApplicable) { return properties; }

    var filtered = [];
    
    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];

      for (var j in type) {
        if (
          type[j] &&
          j == property.propertyData.property_type
        ) {

          filtered.push(property);
        }
      }
    }
    

    return filtered;
  };
});