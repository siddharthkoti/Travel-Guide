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

videosDisplayed = new Array();
var counter = 0;

function myMap() {
	 myCenter = new google.maps.LatLng(13.972442,77.580643);
	//myCenter1 = new google.maps.LatLng(12.2958, 76.6394);
	 //cs= '<img src="imgs2/k1.jpg" alt="image is gere">'
	 position = [[12.972442,77.580643],[12.2958, 76.6394],[12.4244,75.7382],[12.9141,74.8560],[13.3153,75.7754],[13.9299,75.5681],
				[15.3350,76.4600],[15.8497,74.4977],[16.8302,75.7100]]
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
				if(typeof(infowindow1) !== 'undefined')infowindow1.close();
				var ind = getIdx(e.latLng.lat(),e.latLng.lng());
				
				if(videosDisplayed==undefined || videosDisplayed.indexOf(ind)<0){
					console.log(videosDisplayed);
					videosDisplayed.push(ind);
					infowindow = new google.maps.InfoWindow({content:'<img width="250" height="150" src="imgs2/load.gif">'});
					infowindow.open(map,marker[ind]);
					counter++;
					setTimeout(callVideo,1000,e);
				}
				else{
					callVideo(e);
				}
				
		});
	}
	// marker = new google.maps.Marker({position:myCenter});
	// marker1 = new google.maps.Marker({position:myCenter1});
	//marker.setMap(map);
	//marker1.setMap(map);
	//console.log(marker.position);
	//google.maps.event.addListener(marker,'click',showImg);
}


function callVideo(e,i){
	//clearTimeout(s);
	var ind;
	if(e){
		ind = getIdx(e.latLng.lat(),e.latLng.lng());
		infowindow.close();
		$.ajax({url: "get_image.php",type: "GET", data:{id: ind}, success: function(result){
		infowindow = new google.maps.InfoWindow({content:result});
		infowindow.open(map,marker[ind]);
		document.getElementById(ind.toString()).pause();
		check();
		
	}});
	}
	
	
	else{
		ind = i;
		$.ajax({url: "get_image.php",type: "GET", data:{id: ind}, success: function(result){
		infowindow1 = new google.maps.InfoWindow({content:result});
		infowindow1.open(map,marker[ind]);
		document.getElementById(ind.toString()).pause();
		check();
		
	}});
	}
	if(videosDisplayed.indexOf(ind)<0)
		videosDisplayed.push(ind);

	//infowindow.close();
	//$.ajax({url: "get_image.php",type: "GET", data:{id: ind}, success: function(result){
	//nfowindow = new google.maps.InfoWindow({content:result});
	//infowindow.open(map,marker[ind]);
	//var x = ind.toString();
	//console.log(ind.toString());

}

function check()
{
	if(counter == 2)
	{
		counter = 0;
		videosDisplayed.sort();
		var i = videosDisplayed[videosDisplayed.length-1];
		console.log(i);
		var min = 100;
		var diff = 100;
		var pos = 0;
		for(var j=0;j<8;j++){
			if(videosDisplayed.indexOf(j)<0){
				diff= Math.abs(i-j);
			if(diff < min){
				min = diff;
				pos=j;
			}
			}
		}
		console.log(pos);
		callVideo(0,pos);
	}
}

//setInterval(check,4000)