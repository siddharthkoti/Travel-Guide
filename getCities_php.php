<?php 
	extract($_GET);
	
	$r=array();
	$f=fopen("cities.txt","r");
	if($term!=""){
		/*
		while($line=fgets($f)){
			$line = trim($line);
			if(substr($line,0,strlen($term)) == $term){
				
				array_push($a,$line);
			}
		}
		*/
		//$r[];
		while(!feof($f)){
			$line = trim(fgets($f));
			if(strpos(strtolower($line),strtolower($term))!==false){
				
				$r[]=$line;//auto increment in php ;automatically adds to the next index
			}
		}
		//=== compares without coersion;
			echo json_encode($r);
	}
	
	
?>