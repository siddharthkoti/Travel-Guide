<?php
	
	
	extract($_GET);
	$f = file("bus.txt");
	$count = 4*$count;
	if($count < 200)
		echo $f[$count].$f[$count+1].$f[$count+2].$f[$count+3];
	else
		echo "";
	/*
	extract($_GET);
	$file=fopen("bus.txt","r");
	$pos = 4*$count;
	
	$retstr="";
	
	for($i = 0; $i<4; $i++ ) {
            //$a += 10;
            //$b += 5;
			$retstr .= $file[$pos+$i];
         }
	
	//$f = file("imgurl.txt");
	echo $file[$count];
	echo $retstr;
	echo " Hi";*/
	
?>