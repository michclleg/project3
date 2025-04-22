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

document.addEventListener("DOMContentLoaded", function () {
	const imagec=document.querySelectorAll('.imgplaces');
	const leftbtn=document.querySelector('.lbtn');
	const rightbtn=document.querySelector('rbtn');
	let cur=0;
	
	function showProject(i){
		projects.forEach((item, index) => {
			item.classList.toggle('this', index===i);
		});
	}
	
	if(leftbtn&&rightbtn&&imagec.length){
	  leftbtn.addEventListener('click',() => {
		cur=(cur-1+imagec.length) % imagec.length;
		showProject(cur);
	});
	rightbtn.addEventListener('click',() => {
		cur=(cur+1) % imagec.length;
		showProject(cur);
	});
	
	showProject(cur);
	}
}