function map() {
  const loc = { lat:41, lng:-87};

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom:5,
    center:loc,
	zoomControl: true,
    mapTypeId:'roadmap'
  });
  
  const marker = new google.maps.Marker({
    position: loc,
    map: map
  });

  const info = new google.maps.InfoWindow({
    content: "<h2>This is a map</h2>" // Feature 3
  });

  marker.addListener("click", () => {
    info.open(map, marker);
  });
}