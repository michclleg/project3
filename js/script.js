function initMap(){
  const loc={lat:41.83, lng:-87.62};

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

let cur=1;
showSlides(cur);
function plusSlides(n) {
	showSlides(cur+=n);
}
function curSlide(n) {
	showSlides(cur=n);
}

function showSlides(n){
	let i;
	let slides=document.getElementsByClassName("imgplaces");
  if (n > slides.length) {cur = 1}
  if (n < 1) {cur = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}