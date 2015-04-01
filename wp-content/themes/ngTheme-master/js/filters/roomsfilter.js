app.filter("rooms", function() {
  return function (properties, rooms) {
    if(!properties) { return properties; }

    var filtered = [];
    if(!rooms) {
      return properties;
    }

    for (var i = 0; i < properties.length; i++) {
      var property = properties[i];

      property.propertyData.rooms = property.propertyData.rooms / 1;

      if (rooms[0] && rooms[1] &&
        property.propertyData.rooms >= rooms[0] &&
        property.propertyData.rooms <= rooms[1]
      ) {

        filtered.push(property);
      }
      else if (rooms[0] && !rooms[1] &&
        property.propertyData.rooms >= rooms[0]
      ) {
        filtered.push(property);
      }
      else if (!rooms[0] && rooms[1] &&
        property.propertyData.rooms <= rooms[1]
      ) {
        filtered.push(property);
      }
      else if (!rooms[0] && !rooms[1]) {
        filtered.push(property);
      }
    }

    return filtered;
  };
});