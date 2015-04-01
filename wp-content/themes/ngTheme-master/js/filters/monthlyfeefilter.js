app.filter("monthlyFee", function() {
  return function (properties, monthlyFee) {
    if (!properties) { return properties; }

    var filtered = [];
    if (monthlyFee.length === 0) { return properties; }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];

      property.propertyData.monthly_fee = property.propertyData.monthly_fee / 1;

      if (monthlyFee[0] && monthlyFee[1] &&
        property.propertyData.monthly_fee >= monthlyFee[0] &&
        property.propertyData.monthly_fee <= monthlyFee[1]
      ) {

        filtered.push(property);
      }
      else if (monthlyFee[0] && !monthlyFee[1] &&
        property.propertyData.monthly_fee >= monthlyFee[0]
      ) {
        filtered.push(property);
      }
      else if (!monthlyFee[0] && monthlyFee[1] &&
        property.propertyData.monthly_fee <= monthlyFee[1]
      ) {
        filtered.push(property);
      }
      else if (!monthlyFee[0] && !monthlyFee[1]) {
        filtered.push(property);
      }
    }

    return filtered;
  };
});