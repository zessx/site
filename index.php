<!DOCTYPE html>
<?php
	function asset($filename)
	{
		$folders 	= array(
			'css' 	=> 'assets/css/',
			'js' 	=> 'assets/js/',
			'png' 	=> 'assets/img/',
			'jpg' 	=> 'assets/img/',
			'jpeg' 	=> 'assets/img/',
			'ico' 	=> '',
		);
		$root 		= $_SERVER['REMOTE_ADDR'] == '127.0.0.1' ? 'http://localhost/smarchal/v6/' : 'http://smarchal.com/';
		$extension 	= preg_replace('/^.+\.(css|js|png|jpe?g|ico)$/i', '$1', $filename);
		$folder		= $folders[$extension];
		$file		= implode(array(
			preg_replace('/^(.+)\..+$/i', '$1', $filename),
			filemtime(dirname(__FILE__).'/'.$folder.$filename),
			$extension
			), '.');
		return $root.$folder.$file;
	}
?>
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>Samuel Marchal > Web Developer</title>
		<meta name="author" content="Samuel Marchal - zessx">
		<meta name="description" content="Personal website of Samuel Marchal, aka zessx">
		<meta name="keywords" content="Samuel Marchal, zessx, Web Developer">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta property="og:image" content="<?php echo asset('logo.png') ?>">

		<link rel="shortcut icon" href="<?php echo asset('favicon.ico')?>" type="image/x-icon">

		<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="<?php echo asset('app.min.css') ?>" type='text/css'>
	</head>
	<body>
		<section id="wrapper" class="wrapper closed">
			<div class="shutter shutter-top"></div>
			<a id="zessx" class="zessx" href="http://zes.sx">zessx</a>
			<div id="strip" class="strip">
				<a href="https://www.facebook.com/marchal.samuel" class="external"><i class="icon-facebook"></i></a>
				<a href="http://fr.viadeo.com/fr/profile/samuel.marchal2" class="external"><i class="icon-viadeo"></i></a>
				<a href="http://www.linkedin.com/pub/samuel-marchal/26/a73/584" class="external"><i class="icon-linkedin"></i></a>
				<a href="http://careers.stackoverflow.com/zessx" class="external"><i class="icon-careers"></i></a>
				<a href="mailto:contact@zes.sx"><i class="icon-email"></i></a>
				<span class="separator"></span>
				<a href="http://blog.smarchal.com" class="external"><i class="icon-rss"></i></a>
				<a href="https://google.com/+SamuelMarchal-zessx" class="external"><i class="icon-gplus"></i></a>
				<a href="https://www.twitter.com/zessx" class="external"><i class="icon-twitter"></i></a>
				<a href="https://github.com/zessx" class="external"><i class="icon-github"></i></a>
				<a href="http://stackoverflow.com/users/1238019/zessx" class="external"><i class="icon-stackoverflow"></i></a>
			</div>
			<div class="shutter shutter-bottom">
				<p>
					<strong>Samuel Marchal</strong><small> - zessx</small><br>
					Web Developer - <a href="http://www.alancia.fr/" class="external">Alancia</a>
				</p>
			</div>
		</section>

		<script src="<?php echo asset('app.js') ?>"></script>
	</body>
</html>