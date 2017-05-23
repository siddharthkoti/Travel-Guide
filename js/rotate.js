function rotate(id){

	var gg=document.getElementById(id);
	gg.classList.remove("imageRot");
	gg.className="imageRot";

	
	
	setTimeout(function(){
		gg.classList.remove("imageRot");

	},510);

	//swap destination and source values;
	var source=document.getElementById("from");
	var destination=document.getElementById("to");
	var temp=source.value;
	source.value=destination.value;
	destination.value=temp;

}