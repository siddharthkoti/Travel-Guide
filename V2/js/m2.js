
function getIdx(a,b)
{
		a=a.toString().slice(0,4);
		b=b.toString().slice(0,4);
		for(var i=0;i<position.length;i++)
		{
			p=position[i][0].toString().slice(0,4);
			q=position[i][1].toString().slice(0,4);
			if(a == p && b == q)
				return i;
		}
}

function myMap() {
	 myCenter = new google.maps.LatLng(16,77);
	//myCenter1 = new google.maps.LatLng(12.2958, 76.6394);
	 //cs= '<img src="imgs2/k1.jpg" alt="image is gere">'
	 position = [[12.972442,77.580643],[12.2958, 76.6394],[15.3350,76.4600],[16.8302,75.7100],[12.4244,75.7382],[12.9141,74.8560],
				 [13.9299,75.5681],[15.8497,74.4977],[13.3153,75.7754]]
	 marker = new Array();
	 mapCanvas = document.getElementById("map");
	 mapOptions = {center: myCenter, zoom: 7, mapTypeId: google.maps.MapTypeId.ROADMAP};
	 
            //disableDefaultUI: true
	 map = new google.maps.Map(mapCanvas, mapOptions);
	
	 
	 for(var i=0;i<position.length;i++){
		var pos = new google.maps.LatLng(position[i][0],position[i][1]);
		marker.push(new google.maps.Marker({position:pos}));
		marker[i].setMap(map);
		var cs = 0;
		google.maps.event.addListener(marker[i],'click',function(e){
				if(typeof(infowindow) !== 'undefined')infowindow.close();
				var ind = getIdx(e.latLng.lat(),e.latLng.lng());
				infowindow = new google.maps.InfoWindow({content:'<img width="250" height="150" src="imgs2/load.gif">'});
				infowindow.open(map,marker[ind]);
				setTimeout(callVideo,1000,e);
		});
	}
	// marker = new google.maps.Marker({position:myCenter});
	// marker1 = new google.maps.Marker({position:myCenter1});
	//marker.setMap(map);
	//marker1.setMap(map);
	//console.log(marker.position);
	//google.maps.event.addListener(marker,'click',showImg);
}


function callVideo(e){
	//clearTimeout(s);
	var ind = getIdx(e.latLng.lat(),e.latLng.lng());
		infowindow.close();
		$.ajax({url: "get_image.php",type: "GET", data:{id: ind}, success: function(result){
		infowindow = new google.maps.InfoWindow({content:result});
		infowindow.open(map,marker[ind]);
	}});
}