app.filter("askingPrice", function() {
  return function (properties, priceRange) {
    if (!properties) { return properties; }

    var filtered = [];
    if (priceRange.length === 0) { return properties; }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];

      property.propertyData.asking_price = property.propertyData.asking_price / 1;
    }

    return filtered;
  };
});