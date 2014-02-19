<!DOCTYPE html>
<?php
	function asset($filename)
	{
		$folders    = array(
			'css'   => 'assets/css/',
			'js'    => 'assets/js/',
			'png'   => 'assets/img/',
			'jpg'   => 'assets/img/',
			'jpeg'  => 'assets/img/',
			'ico'   => '',
		);
		$host       = 'http://'.$_SERVER['HTTP_HOST'].'/';
		$extension  = preg_replace('/^.+\.(css|js|png|jpe?g|ico)$/i', '$1', $filename);
		$folder     = $folders[$extension];
		$file       = implode(array(
			preg_replace('/^(.+)\..+$/i', '$1', $filename),
			filemtime(dirname(__FILE__).'/'.$folder.$filename),
			$extension
			), '.');
		return $host.$folder.$file;
	}
?>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="author" content="">

	<title>Samuel Marchal > Web Developer</title>

	<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300' rel='stylesheet' type='text/css'>
	<link href="<?php echo asset('app.css') ?>" rel="stylesheet">
	<link href="<?php echo asset('favicon.ico')?>" rel="shortcut icon" type="image/x-icon">

</head>

<body id="top" data-spy="scroll" data-target=".navbar-custom">

	<header>
		<nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
			<div class="container">
				<div class="navbar-header page-scroll">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
						<i class="fa fa-bars"></i>
					</button>
					<a class="navbar-brand" href="#top">
						<i class="zessxr animated"></i>
					</a>
				</div>

				<div class="collapse navbar-collapse navbar-right navbar-main-collapse">
					<ul class="nav navbar-nav">
						<li class="hidden">
							<a href="#top"></a>
						</li>
						<li class="page-scroll">
							<a href="#about">About</a>
						</li>
						<li class="page-scroll">
							<a href="#works">Works</a>
						</li>
						<li class="page-scroll">
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>

	<section class="intro">
		<div class="intro-body">
			<div class="container">
				<div class="row">
					<div class="col-xs-12 col-md-offset-1">
						<h1 class="brand-heading">Samuel Marchal<br><small>zessx</small></h1>
						<p class="intro-text">Web Developer</p>
						<div class="page-scroll">
							<a href="#about" class="btn btn-circle">
								<i class="icon-angle-double-down animated"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="about" class="container content-section text-center">
		<div class="row">
			<div class="col-lg-8 col-lg-offset-2">
				<h2>About me</h2>
				<p>
					I'm <strong><a href="http://smarchal.com">Samuel Marchal</a></strong>, mostly known as <strong><a href="https://twitter.com/zessx">zessx</a></strong> on the Internet.
				</p>
				<p>
					Web Developer, I'm a strong user of <strong><a href="http://php.net/">PHP 5</a></strong>, <strong><a href="http://jquery.com/">jQuery</a></strong>, <strong><a href="http://sass-lang.com/">SASS</a></strong> and <strong><a href="http://getbootstrap.com/">Bootstrap</a></strong>.
				</p>
				<p>
					I'm continually looking to try new technologies,<br>
					you can follow my discoveries and my tips on <strong><a href="http://blog.smarchal.com">my blog</a></strong>.
				</p>
			</div>
		</div>
	</section>

	<section id="works" class="content-section text-center">
		<div class="works-section">
			<div class="container">
				<div class="col-lg-8 col-lg-offset-2">
					<h2>Works</h2>

					<article>
						<h3><a href="http://smarchal.com/monsterflat" class="external" title="Monsterflat">Monsterflat</a></h3>
						<aside class="labels">
							<a class="label label-default" href="http://stackoverflow.com/questions/tagged/html5">html5</a>
							<a class="label label-default" href="http://stackoverflow.com/questions/tagged/css3">css3</a>
						</aside>
						<p>
							Monsterflat is a pack of websites' logos using flat design.
						</p>
					</article>

					<article>
						<h3><a href="http://smarchal.com/twbscolor" class="external" title="TWBSColor">TWBSColor</a></h3>
						<aside class="labels">
							<a class="label label-default" href="http://stackoverflow.com/questions/tagged/twitter-bootstrap-3">twitter-bootstrap-3</a>
							<a class="label label-default" href="http://stackoverflow.com/questions/tagged/css3">css3</a>
							<a class="label label-default" href="http://stackoverflow.com/questions/tagged/sass">sass</a>
							<a class="label label-default" href="http://stackoverflow.com/questions/tagged/less">less</a>
						</aside>
						<p>
							TWBSColor allows you to easily generate a new Bootstrap navbar with customized colors.
						</p>
					</article>

					<article>
						<h3><a href="http://smarchal.com/24ss" class="external" title="24SSgrid">24SSgrid</a></h3>
						<aside class="labels">
							<a class="label label-default" href="http://stackoverflow.com/questions/tagged/css3">css3</a>
							<a class="label label-default" href="http://stackoverflow.com/questions/tagged/sass">sass</a>
							<a class="label label-default" href="http://stackoverflow.com/questions/tagged/grid">grid</a>
						</aside>
						<p>
							24SSgrid is a solid grid for SASS. It use 24 columns by default, but is fully configurable.
						</p>
					</article>
				</div>
			</div>
		</div>
	</section>

	<section id="contact" class="container content-section text-center">
		<div class="row">
			<div class="col-lg-8 col-lg-offset-2">
				<h2>Contact me !</h2>
				<p>
					Feel free to email me for any question or proposal.
				</p>
				<ul class="list-inline">
					<li><a href="mailto:contact@smarchal.com" class="btn btn-default btn-lg"><i class="icon-email"></i> contact@smarchal.com</a></li>
				</ul>

				<br>

				<p>
					You can also find me on these networks :
				</p>
				<ul class="list-inline banner-social-buttons">
					<li class="col-xs-3 col-sm-1 col-sm-offset-2"><a href="https://github.com/zessx" class="external" title="Github"><i class="icon-github-circled"></i></a></li>
					<li class="col-xs-3 col-sm-1"><a href="http://stackoverflow.com/users/1238019/zessx" class="external" title="Stackoverflow"><i class="icon-stackoverflow"></i></a></li>
					<li class="col-xs-3 col-sm-1"><a href="http://fr.viadeo.com/fr/profile/samuel.marchal2" class="external" title="Viadeo"><i class="icon-viadeo"></i></a></li>
					<li class="col-xs-3 col-sm-1"><a href="http://www.linkedin.com/pub/samuel-marchal/26/a73/584" class="external" title="Linkedin"><i class="icon-linkedin"></i></a></li>
					<li class="col-xs-3 col-sm-1"><a href="http://careers.stackoverflow.com/zessx" class="external" title="Careers"><i class="icon-careers"></i></a></li>
					<li class="col-xs-3 col-sm-1"><a href="https://www.twitter.com/zessx" class="external" title="Twitter"><i class="icon-twitter"></i></a></li>
					<li class="col-xs-3 col-sm-1"><a href="https://www.facebook.com/marchal.samuel" class="external" title="Facebook"><i class="icon-facebook"></i></a></li>
					<li class="col-xs-3 col-sm-1"><a href="https://google.com/+SamuelMarchal-zessx" class="external" title="Google+"><i class="icon-gplus"></i></a></li>
					<li class="col-xs-3 col-sm-1"><a href="http://blog.smarchal.com" class="external" title="Rss"><i class="icon-rss"></i></a></li>
				</ul>
			</div>
		</div>
	</section>

	<section id="map"></section>

	<footer class="container text-center">
		<div class="row">
			<div class="col-lg-8 col-lg-offset-2">
				<p>
					Made by <a href="http://smarchal.com">Samuel Marchal</a>,<br>
					With <a href="http://sass-lang.com/">SASS</a>, <a href="http://getbootstrap.com/">Bootstrap</a> and <a href="http://startbootstrap.com/grayscale">Grayscale</a>
				</p>
				<p>
					<a rel="license" href="http://opensource.org/licenses/MIT"><img alt="Licence MIT" style="border-width:0" src="http://smarchal.com/24ss/assets/license-mit.png"></a>
				</p>
				<p>
					<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;business=KTYWBM9HJMMSE&amp;lc=FR&amp;item_name=Buy%20a%20coffee%20to%20zessx%20%28Samuel%20Marchal%29&amp;currency_code=EUR&amp;bn=PP%2dDonationsBF%3abmac%3aNonHosted" onclick="_gaq.push(['_trackEvent', 'Donate', 'Donate', 'Paypal', 1, true]);" target="_blank"><img src="http://smarchal.com/bmac" alt="Buy me a coffee !" style="border-radius:5px" onmouseover="this.style.boxShadow='0 0 5px #00335e'" onmouseout="this.style.boxShadow=null"></a>
				</p>
			</div>
		</div>
	</footer>

	<!-- Core JavaScript Files -->
	<script src="<?php echo asset('jquery.min.js') ?>"></script>
	<script src="<?php echo asset('jquery.easing.min.js') ?>"></script>
	<script src="<?php echo asset('bootstrap.min.js') ?>"></script>

	<!-- Google Maps API Key - You will need to use your own API key to use the map feature -->
	<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRngKslUGJTlibkQ3FkfTxj3Xss1UlZDA&sensor=false"></script>

	<!-- Custom JavaScript -->
	<script src="<?php echo asset('app.min.js') ?>"></script>

</body>

</html>
