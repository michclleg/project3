function map() {
  var mapStart = {
    center: {lat:41 ,lng:-87},
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("map"),mapStart {
    mapTypeID:'roadmap',
	zoomControl: true,
  });
	
}