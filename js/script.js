function initMap(){
  const loc={lat:41, lng:-87};

  const map=new google.maps.Map(document.getElementById("map"),{
    zoom:15,
    center:loc,
	zoomControl:true,
    mapTypeId:'roadmap',
  });
  
  const marker=new google.maps.Marker({
    position:loc,
    map:map,
	title:"This is IIT",
	icon: {
		url:'images/nav.png',
		scaledSize:new google.maps.Size(50,50),
	},
  });

  const info=new google.maps.InfoWindow({
    content:"<h2>School Campus</h2><p>This is IIT's campus</p>",
  });
  
  marker.addListener("click", () => {
    info.open(map, marker);
  });
}