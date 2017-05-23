<html>
	<head>
		<link rel = "stylesheet" type="text/css" href="bootstrap-3.3.6-dist\css\bootstrap.css"></link>
		<style>
		
		</style>
		<script>
			count=0;
			scrollamt=150;
			function getContent(){
				//alert('hi');
			if(document.body.scrollTop>scrollamt || document.documentElement.scrollTop>scrollamt){
					
					xhr=new XMLHttpRequest();
					xhr.onreadystatechange=showContent;
					xhr.open("GET","busContent.php?count="+count++,true);
					xhr.send();		
					
				}
			}
			
			function showContent(){
				if(xhr.readyState==4 && xhr.status==200){
					//alert('hi');
					console.log(xhr.resposeText);
					document.getElementById("content").innerHTML+=xhr.responseText;
					scrollamt+=25;
				}
			}
			window.onscroll=getContent;
		</script>
		<link rel="stylesheet" type="text/css" href="../css/navigation.css">
	</head>
	<body>
	<nav class="navbar navbar-inverse navbar-bg-gray">
		 <div class="container-fluid">
	
			<ul class="nav navbar-nav navbar-align-center">
			  <li class=""><a href="../mainpage.html" >HOME</a></li>
			  <li class=""><a href="#" >HOTELS</a></li>
			  <li class=""><a href="#" >HOLIDAYS</a></li>
			  <li class=""><a href="../V2/home1.html" >EXPLORE</a></li>
			  <li class=""><a href="../V2/map/map.html" >MAPS</a></li>
			  <li class="active-tab"><a href="map.html" >BOOKING</a></li>
			  
		    </ul>
		 </div>	
	</nav>
	<?php
	extract($_GET);
	echo"<center><h3>Buses from $from to $to on $date</h3></center>";
	?>
	<div class="container">        
  <table class="table table-hover" id="content">
    <thead>
      <tr>
        <th>Bus Type</th>
        <th>Travel Time</th>
        <th>Rating</th>
		 <th>Seats</th>
        <th>Fare</th>
        <th>Book</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>SRS Travels<br/><font color="red">Non AC Sleeper</font></td>
        <td>21:45 - 5:00</td>
        <td>4.1</td>
		<td>32<br/><font color="red">10 window seats</font></td>
        <td>799</td>
		<td><a href="../project/reserve.html"><button type="button" class="btn btn-primary">Book</button> </a></td>
	  </tr>
      <tr><td>VRL Travels<br/><font color="red">Non AC Sleeper</font></td><td>21:15 - 5:00</td><td>4.1</td><td>19<br/><font color="red">10 window seats</font></td><td>799</td><td><a href = "../project/reserve.html"><button type="button" class="btn btn-primary">Book</button></a></td></tr>
<tr><td>VRL Super Delux<br/><font color="green">AC Sleeper</font></td><td>21:30 - 5:00</td><td>4.0</td><td>15<br/><font color="green">5 window seats</font></td><td>899</td><td><a href = "../project/reserve.html"><button type="button" class="btn btn-primary">Book</button></a></td></tr>
<tr><td>Karnataka Sarigae<br/><font color="blue">Non AC Sleeper</font></td><td>21:45 - 5:00</td><td>4.5</td><td>14<br/><font color="yellow">4 window seats</font></td><td>999</td><td><a href = "../project/reserve.html"><button type="button" class="btn btn-primary">Book</button></a></td></tr>
<tr><td>Rajahamsa<br/><font color="orange">Non AC Sleeper</font></td><td>22:00 - 5:00</td><td>4.3</td><td>13<br/><font color="blue">3 window seats</font></td><td>1099</td><td><a href = "../project/reserve.html"><button type="button" class="btn btn-primary">Book</button></a></td></tr>
<tr><td>Rajahamsa Delux<br/><font color="pink">AC Sleeper</font></td><td>20:15 - 5:00</td><td>4.4</td><td>11<br/><font color="purple">4 window seats</font></td><td>799</td><td><a href = "../project/reserve.html"><button type="button" class="btn btn-primary">Book</button></a></td></tr>
<tr><td>Volvo Super<br/><font color="yellow">Non AC Sleeper</font></td><td>20:30 - 5:00</td><td>4.5</td><td>5<br/><font color="violet">No window seats</font></td><td>899</td><td><a href = "../project/reserve.html"><button type="button" class="btn btn-primary">Book</button></a></td></tr>
<tr><td>Airavata<br/><font color="purple">Non AC Sleeper</font></td><td>20:45 - 5:00</td><td>3.5</td><td>6<br/><font color="indigo">5 window seats</font></td><td>999</td><td><a href = "../project/reserve.html"><button type="button" class="btn btn-primary">Book</button></a></td></tr>
<tr><td>Airavata Delux<br/><font color="violet">AC Sleeper</font></td><td>21:00 - 4:45</td><td>4.3</td><td>15<br/><font color="orange">6 window seats</font></td><td>1099</td><td><a href = "../project/reserve.html"><button type="button" class="btn btn-primary">Book</button></a></td></tr>
<tr><td>Manish Transport<br/><font color="indigo">Non AC Sleeper</font></td><td>20:15 - 5:00</td><td>3.5</td><td>11<br/><font color="green">7 window seats</font></td><td>1199</td><td><a href = "../project/reserve.html"><button type="button" class="btn btn-primary">Book</button></a></td></tr>
<tr><td>Sharma Travels<br/><font color="grey">Non AC Sleeper</font></td><td>20:45 - 5:30</td><td>3.3</td><td>12<br/><font color="black">2 window seats</font></td><td>850</td><td><a href = "../project/reserve.html"><button type="button" class="btn btn-primary">Book</button></a></td></tr>
<tr><td>Durgamba Travels<br/><font color="black">Non AC Sleeper</font></td><td>20:30 - 5:30</td><td>4.4</td><td>14<br/><font color="pink">4 window seats</font></td><td>1200</td><td><a href = "../project/reserve.html"><button type="button" class="btn btn-primary">Book</button></a></td></tr>
<tr><td>VRL Travels<br/><font color="red">Non AC Sleeper</font></td><td>19:45 - 5:00</td><td>5.0</td><td>13<br/><font color="black">3 window seats</font></td><td>1200</td><td><a href = "../project/reserve.html"><button type="button" class="btn btn-primary">Book</button></a></td></tr>
<tr><td>Rajahamsa Gold Class<br/><font color="green">AC Sleeper</font></td><td>19:45 - 5:00</td><td>5.0</td><td>6<br/><font color="red">1 window seats</font></td><td>1300</td><td><a href = "../project/reserve.html"><button type="button" class="btn btn-primary">Book</button></a></td></tr>
<tr><td>Rajahamsa Club Class<br/><font color="yellow">AC Sleeper</font></td><td>19:15 - 4:30</td><td>5.0</td><td>6<br/><font color="yellow">No window seats</font></td><td>1500</td><td><a href = "../project/reserve.html"><button type="button" class="btn btn-primary">Book</button></a></td></tr>
<tr><td>Rajahamsa Executive<br/><font color="pink">Non AC Sleeper</font></td><td>19:30 - 4:00</td><td>4.0</td><td>9<br/><font color="green">No window seats</font></td><td>1600</td><td><a href = "../project/reserve.html"><button type="button" class="btn btn-primary">Book</button></a></td></tr>
    </tbody>
  </table>
</div>
	</body>

</html>
