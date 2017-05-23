<?php
	//session_start();
	header("Content-type: text/event-stream");
	header("Cache-Control: no-cache");
	ob_start();
	
	$oldtime = null;
	while(true){
		clearstatcache();
		$newtime = filemtime("seats.txt");
		if($newtime != $oldtime)
		{
			$data = explode("\n",file_get_contents("seats.txt"));
			$data = json_encode($data);
			echo "event:update\n";
			echo "retry:1000\n";
			echo "data:".$data."\n\n";
			
			ob_flush();
			flush();
			
			$oldtime = $newtime;
		}
		sleep(1);
	}
?>