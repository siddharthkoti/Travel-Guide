function getInfo(){
	xhr = new XMLHttpRequest();	
	if(xhr){
		xhr.onreadystatechange = showInfo;
		xhr.open("GET", "info.txt", true);
		xhr.send(null);
	}	
}

function showInfo(){
	var res = xhr.responseText.split();
	document.getElementById("info").innerHTML = res ;
	setTimeout(getPics,2500);
}

function getPics(){
		
	xhr.onreadystatechange = showPics;
	xhr.open("GET", "imgs.txt", true);
	xhr.send(null);

}
		
function showPics(){

	if(xhr.readyState=="4"&&xhr.status==200){
		var res = xhr.responseText.split(";");
		console.log(res[0]);
		document.getElementById("slider").innerHTML = res[0] ;
		document.getElementById("slider1").innerHTML = res[1] ;
		$("#next").show();
		$("#pause").show();
		timer = setTimeout(nex,3000);
		setTimeout(getLinks,1000);
	}
}

function getLinks(){
	xhr.onreadystatechange = showLinks;
	xhr.open("GET", "links.txt", true);
	xhr.send(null);
	setTimeout(getVideo,1000);
}

function getadv(){
	xhr = new XMLHttpRequest();	
	xhr.onreadystatechange = showadv;
	xhr.open("GET", "adv.txt", true);
	//xhr.reponseType="text";
	xhr.send(null);
	
}

function showadv()
{
	if(xhr.readyState=="4"&&xhr.status==200){
		
		var res = xhr.responseText;
		document.getElementById("adv").innerHTML = res;
		//setTimeout(getLinks,6000);
	}
}

function getVideo(){
	xhr.open("GET","ktk.mp4",true);
	xhr.onreadystatechange=showVideo;
	xhr.responseType = "blob";
	xhr.send();
}

function showVideo(){
	if(xhr.readyState==4 && xhr.status==200){
		data = xhr.response;
		vid = document.createElement("video");
		vid.controls=true;
		vid.width = 1080;
		vid.height= 500;
		vid.src = window.URL.createObjectURL(data);
		var res = document.getElementById("vdo");
		
		//res.removeChild(document.getElementById("i1"));
		res.appendChild(vid);
		$("#imgs2").addClass('animated slideInDown');
		$("#imgs2").show();
		//setTimeout(getadv,2000)
	}
}

function showLinks()
{
	if(xhr.readyState=="4"&&xhr.status==200){
		
		var res = xhr.responseText;
		document.getElementById("links").innerHTML = res;
		
	}
	
}

var i=1;
timer = null;
var j = 5;
function nex()
{
	$("#next").css("pointer-events","none");
	clearTimeout(timer);	
	$("#prev").show();
	$("#" + i).fadeOut(1000);
	$("#" + j).fadeOut(1000);
	$("#" + i).promise().done(function(){
	i++;
	j++;
	$("#" + i).fadeIn(1000);
	$("#" + j).fadeIn(1000);
	if(i==4){
		$("#prev").show();
		$("#next").hide();
		timer = setTimeout(pre,5000);
		$("#next").css("pointer-events", "auto");
	}
	else{
		timer = setTimeout(nex,5000);
		$("#next").css("pointer-events", "auto");
	}
	});
	
};

function pre(){

	$("#prev").css("pointer-events","none");
	clearTimeout(timer);


	
	
	$("#prev").css("pointer-events", "none");
	$("#prev").show();
	$("#next").show();
	$("#" + i).fadeOut(1000);
	$("#" + j).fadeOut(1000);
	$("#" + i).promise().done(function(){
	i--;
	j--;
	$("#" + i).fadeIn(1000);
	$("#" + j).fadeIn(1000);
	if(i==1){
		$("#next").show();
		$("#prev").hide();
		timer = setTimeout(nex,5000);
		$("#prev").css("pointer-events", "auto");
	}
	else{
		timer = setTimeout(pre,5000);
		$("#prev").css("pointer-events", "auto");
	}
	});
}


function pause()
{
	clearTimeout(timer);
	$("#play").show();
	$("#pause").hide()
	
	
}

function play()
{
	clearTimeout(timer);
	//$("#pause").css("pointer-events","none");
	$("#pause").show();
	$("#play").hide();
	if(i < 7)
		timer = setTimeout(nex,500);
	else
		timer = setTimeout(pre,500);
}

function foo(){
		
	$("#imgs").addClass('animated slideInUp');
	$("#imgs1").addClass('animated slideInUp');
	//$("#imgs2").addClass('animated slideInUp');
	$("#imgs").show();
	$("#imgs1").show();
	//$("#imgs2").show();
	//alert("hi");
}


$(document).ready(function(){
	$("#next").click(nex);	
	$("#prev").click(pre);
	$("#pause").click(pause);
	$("#play").click(play);
	$("#imgs").hide();
	$("#imgs1").hide();
	$("#imgs2").hide();
	setTimeout(foo,2000);
	setTimeout(getInfo,2000);
});

		