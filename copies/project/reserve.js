function serverEvent(){
	var ev = new EventSource("availSeat.php");
	ev.addEventListener("update",updateSeat);
	ev.onerror = function(e){
		console.log("error");
		console.log(e);
	}
}

function updateSeat(event){
	console.log('In updateSeat');
	res = JSON.parse(event.data);
	//console.log(event.data);
	for(var i=0; i<res.length; ++i){
		var t = res[i].split(" ");
		var d = document.getElementById("seat"+t[0]);
		if(parseInt(t[1]))
			d.style.backgroundColor = "green";
		else
			d.style.backgroundColor = "red";
	}
}


function checkAvailability(){
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = updateAvailability;
	xhr.open("GET","seats.txt",true);
	xhr.send();
}

function bookSeat(e){
	//console.log(e.target);
	
	var elem = e.target;
	//select a seat
	if(elem.style.backgroundColor == "green"){
		elem.style.backgroundColor = "blue";
		s.push(elem.id.replace("seat",''));
	}
	
	//deselect a seat
	else if(elem.style.backgroundColor == "blue"){
		elem.style.backgroundColor = "green";
		var index = s.indexOf(elem.id.replace("seat",''));
		s.splice(index,1);
	}
	console.log(s);
}

function confirmSeat(){
	if(s.length == 0){
		$("#stat").html("Please select seats!!");
	}
	else{
		$.post("confirm_seat.php",{data : s.toString()},function(result){
			$("#stat").html("Seats Confirmed!!");
		});
		s = new Array(); //clear and set a new array
	}
	
}

function updateAvailability(){
	if(xhr.readyState == 4 && xhr.status == 200){
		//console.log(xhr.responseText);
		res = xhr.responseText;
		res = res.split("\n");
		for(var i=0; i<res.length; ++i){
			var t = res[i].split(" ");
			var d = document.getElementById("seat"+t[0]);
			if(parseInt(t[1]))
				d.style.backgroundColor = "green";
			else
				d.style.backgroundColor = "red";
			d.onclick = bookSeat;
		}
	}
}

function init(){
	checkAvailability();
	serverEvent();
	s = new Array(); //to keep track of selected seats
}