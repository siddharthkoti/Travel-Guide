<?php
	extract($_POST);
	$arr = explode(",",$data);
	sort($arr);
	$f = file("seats.txt");
	for($i=0; $i<count($arr); $i++)
		$f[$arr[$i]-1] = $arr[$i]." "."0\n";
	//remove extra new line at the end of file.
	$f[count($f)-1] = rtrim($f[count($f)-1],"\n");
	file_put_contents("seats.txt",implode('',$f));
?>