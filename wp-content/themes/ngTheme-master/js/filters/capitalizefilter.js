app.filter('capitalize', function() {
  return function(data) {
      if (data!=null)
          return data.substring(0,1).toUpperCase()+data.substring(1);
  };
});