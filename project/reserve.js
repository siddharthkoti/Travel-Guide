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
	var price = document.getElementById('price');
	//select a seat
	if(elem.style.backgroundColor == "green"){
		elem.style.backgroundColor = "blue";
		s.push(elem.id.replace("seat",''));
		price.value = "Rs. "+s.length * 799;
		price.disabled = true;
	}
	
	//deselect a seat
	else if(elem.style.backgroundColor == "blue"){
		elem.style.backgroundColor = "green";
		var index = s.indexOf(elem.id.replace("seat",''));
		s.splice(index,1);
		price.value = "Rs. "+s.length * 799;
		price.disabled = true;
	}
	console.log(s);
}

function confirmSeat(){
	console.log('confirm Seat');
	if(s.length == 0){
		alert("Please select seats!!!")
		//$("#stat").html("Please select seats!!");
	}
	else if(document.getElementById("card").value == 0 || !document.getElementById("cardno").value || !document.getElementById("cvv").value)
		alert("Please fill in the payment details!!!");
	else{
		$.post("confirm_seat.php",{data : s.toString()},function(result){
			//$("#stat").html("Seats Confirmed!!");
			// console.log(result);
			name = document.getElementById('name').value;
			paid = document.getElementById('price').value;
			//seat = s.toString();
			window.location="http://127.0.0.1:8000/home?name="+name+"&paid="+paid;
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