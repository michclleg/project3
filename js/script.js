function initMap(){
  const loc={lat:41, lng:-87};

  const maps=new google.maps.Map(document.getElementById("map"),{
    zoom:5,
    center:loc,
	zoomControl:true,
    mapTypeId:'roadmap',
  });
  
  const marker=new google.maps.Marker({
    position:loc,
    map:maps,
	title:"This is IIT",
	icon: {
		url:'images/nav.png',
		scaledSize:new google.maps.Size(50,50),
	}
  });

  const info=new google.maps.InfoWindow({
    content:"<h2>This is a map</h2>",
  });
  marker.addListener("click", () => {
    info.open(map, marker);
  });
}