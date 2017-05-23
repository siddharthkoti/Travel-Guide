 		function getToday(){

 			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!

			var yyyy = today.getFullYear();
			if(dd<10){
			    dd='0'+dd;
			} 
			if(mm<10){
			    mm='0'+mm;
			} 

			var today = yyyy+'-'+mm+'-'+dd;
			document.getElementById("date").value = today;

 		}
var today = new Date();
var last = new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000);
var mini=today.toISOString().split('T')[0];
var maxi=last.toISOString().split('T')[0];
document.getElementById("date").setAttribute('min', mini);
document.getElementById("date").setAttribute('max', maxi);



