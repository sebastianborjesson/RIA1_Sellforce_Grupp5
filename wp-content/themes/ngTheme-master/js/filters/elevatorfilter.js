app.filter("hasElevator", function() {
  return function (properties, hasElevator) {
    if (!properties) { return; }
    var filtered = [];

    if (hasElevator != "1" && hasElevator != "0") {
      return properties;
    }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];

      if (property.propertyData.elevator == hasElevator) {
        filtered.push(property);
      }

    }

    return filtered;
  };

});