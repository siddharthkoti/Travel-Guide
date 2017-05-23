			var Suggest=function(){  //ctor
			temp=this;		//'this' refers to obj hence temp refers to obj
			this.timer=null;
			this.search=null;
			this.container=null;//global
			this.to=null;
			this.getCity=function(id){
				
				if(this.timer){
				
					clearTimeout(this.timer);
				}
				

				this.timer=setTimeout(this.sendTerm,1000,id);    //setTimeout() belongs to window object so this in sendterm refers to window object , hence use temp in sendTerm

			}
			this.sendTerm=function(id){
				
				temp.search=document.getElementById(id);
				temp.container=document.getElementById("contai"+id);
				temp.container.innerHTML="";
				console.log(temp.search.value);
				//temp.container.style.display="block";
				//console.log(this); //o/p in console:window
				//console.log(temp);
				url="http://localhost/WTpro/getCities_php.php?term="+temp.search.value;
				//Empty?
				if(temp.search.value==""){
					console.log("No term...Empty term")
				
				}
				
				else{
					//Cache?
					if(localStorage.getItem(url)){
						r=JSON.parse(localStorage.getItem(url));
						console.log("fetching from cache");
						temp.populateCities(r);
					}
					else{
						//Send
						console.log("NOT FOUND IN CACHE");						
						temp.xhr=new XMLHttpRequest();
						//url="http://localhost/ajax/day11/getCities_php.php?term="+temp.search.value;
						temp.xhr.onreadystatechange=temp.fetchCities;
						temp.xhr.open("GET",url,true);
						temp.xhr.send();
						
					}
				}
			
			}
			
			this.fetchCities=function(){
				//this is temp.xhr

				if(this.readyState==4 && this.status==200){
					var cities=JSON.parse(this.responseText);
					
					if(cities.length==0){
						temp.container.className="hidden";
						temp.container.style.overflowY="hidden";
						
					}
					else{//cache only if length>0
						temp.container.className="contai"; 
						localStorage.setItem(this.responseURL,this.responseText);
						temp.populateCities(cities);
					}	
				}
				
			}
			
			this.populateCities=function(r){
				temp.container.style.overflowY="auto";
				temp.container.className="contai";
				temp.to=document.getElementsByClassName("floating-label-to");
				temp.to=temp.to[0];
				temp.to.style.zIndex=-1;
				for(var i=0; i<r.length; i++){
					d=document.createElement("div");
					d.className="disp";
					d.innerHTML=r[i];
					d.onclick=this.setCity;
					d.onmouseover=this.highlightCity;
					d.onmouseout=this.undoHighlight;
					temp.container.appendChild(d);
				}
			}
			
			this.setCity=function(e){
				//console.log(e.target);
				//temp.to.className="show";
				temp.to.style.zIndex=1;
				temp.search.value=e.target.innerHTML;
				//temp.container.style.overflowY="hidden";

				temp.container.innerHTML="";
				temp.container.className="hidden";
				//temp.container.style.display="none";

				
			}
			this.highlightCity=function(e){
				//console.log(e.target);
				e.target.style.backgroundColor="#BBBBBB";
				//temp.container.style.display="none";
				
			}
			this.undoHighlight=function(e){
				//console.log(e.target);
				e.target.style.backgroundColor="#F0E8E8";
				//temp.container.style.display="none";
				
			}
			
			
		}
				
		obj=new Suggest();  //create object obj