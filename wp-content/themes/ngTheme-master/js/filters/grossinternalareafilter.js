app.filter("grossInternalArea", function() {
  return function (properties, grossInternalArea) {
    if (!properties) { return properties; }

    var filtered = [];
    if (grossInternalArea.length === 0) { return properties; }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];

      property.propertyData.gross_internal_area = property.propertyData.gross_internal_area / 1;

      if (grossInternalArea[0] && grossInternalArea[1] &&
        property.propertyData.gross_internal_area >= grossInternalArea[0] &&
        property.propertyData.gross_internal_area <= grossInternalArea[1]
      ) {

        filtered.push(property);
      }
      else if (grossInternalArea[0] && !grossInternalArea[1] &&
        property.propertyData.gross_internal_area >= grossInternalArea[0]
      ) {
        filtered.push(property);
      }
      else if (!grossInternalArea[0] && grossInternalArea[1] &&
        property.propertyData.gross_internal_area <= grossInternalArea[1]
      ) {
        filtered.push(property);
      }
      else if (!grossInternalArea[0] && !grossInternalArea[1]) {
        filtered.push(property);
      }
    }

    return filtered;
  };
});