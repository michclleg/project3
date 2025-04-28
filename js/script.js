function initMap(){
  const loc={lat:41.831299, lng:-87.627274};

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

document.addEventListener("DOMContentLoaded", function () {
	const imagecar=document.querySelectorAll('.imgplaces');
	const leftbtn=document.querySelector('.lbtn');
	const rightbtn=document.querySelector('.rbtn');
	let cur=0;
	
	function showImage(i){
		imagecar.forEach((item, index) => {
			item.classList.toggle('active', index===i);
		});
	}
	
	if(leftbtn&&rightbtn&&imagecar.length){
	  
	  leftbtn.addEventListener('click',() => {
		cur=(cur-1+imagecar.length) % imagecar.length;
		showImage(cur);
	});
	
	  rightbtn.addEventListener('click',() => {
		cur=(cur+1) % imagecar.length;
		showImage(cur);
	});
	
	showImage(cur);
	}
})