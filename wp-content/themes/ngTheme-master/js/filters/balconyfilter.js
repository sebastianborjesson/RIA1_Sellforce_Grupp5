app.filter("hasBalcony", function() {
  return function (properties, hasBalcony) {
    if(!properties) { return; }
    var filtered = [];

    if (hasBalcony != "1" && hasBalcony != "0") {
      return properties;
    }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];

      if (property.propertyData.balcony == hasBalcony) {
        filtered.push(property);
      }
    }

    return filtered;
  };

});