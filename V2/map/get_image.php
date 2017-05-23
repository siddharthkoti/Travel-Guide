<?php
	
	extract($_GET);
	$f = file("imgurl.txt");
	echo $f[$id];

?>