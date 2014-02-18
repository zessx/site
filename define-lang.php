<?php

if(isset($_GET['lang']))
{
	if($_GET['lang'] == 'en') 
	{
		include('lang/en-lang.php');
	}
	else if($_GET['lang'] == 'es') 
	{
		include('lang/es-lang.php');
	}
	else
	{
		include('lang/fr-lang.php');
	}
}
else
{
	include('lang/fr-lang.php');
}

?>