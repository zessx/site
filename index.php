<?php

if($_SERVER['HTTP_HOST'] == 'localhost' OR $_SERVER['SERVER_ADDR'] == '127.0.0.1') {
	define('_ROOT', 'http://localhost/smarchal/v5/');
	error_reporting(E_ALL & ~E_NOTICE);
} else {
	define('_ROOT', 'http://smarchal.com/');
	error_reporting(0);
}

define('_ASSETS', _ROOT.'assets/');
define('_IMG', _ASSETS.'img/');
define('_CSS', _ASSETS.'css/');
define('_JS', _ASSETS.'js/');

?>
<!DOCTYPE html>
<html>

	<head>

		<title>Samuel Marchal - Développeur Intégrateur</title>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8" />

		<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
		<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Quicksand:300,400,700" type="text/css">
		<link rel="stylesheet" href="<?php echo _CSS; ?>normalize.css" type="text/css" media="screen" />
		<link rel="stylesheet" href="<?php echo _CSS; ?>supersized.core.css" type="text/css" media="screen" />
		<link rel="stylesheet" href="<?php echo _CSS; ?>main.css" type="text/css" media="all" />

		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js"></script>
		<script type="text/javascript" src="<?php echo _JS; ?>supersized.core.3.2.1.min.js"></script>
		<!--[if lt IE 9]>
			<script type="text/javascript" src="<?php echo _JS; ?>css3-mediaqueries.js"></script>
		<![endif]-->
		<script type="text/javascript">
			$(function($){	
				$.supersized({
					slides  :  	[ {image : '<?php echo _IMG; ?>clavier.jpg', title : 'smarchal.com'} ]
				});
				$('.internal').click(function(ev){
					if(screen.width > 600)
						ev.preventDefault();
					$('.internal').removeClass('selected');
					$('.content').removeClass('selected');
					$(this).addClass('selected');
					$('#'+$(this).attr('href').substr(1)).addClass('selected');
				});
				$('.up').click(function(){
					$('.internal').removeClass('selected');
					$('.content').removeClass('selected');
					$('#introlink').addClass('selected');
					$('#intro').addClass('selected');
				});
				$('.external').attr('target', '_blank');
		    });
		</script>
		
		<script type="text/javascript">

		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-32364969-1']);
		  _gaq.push(['_setDomainName', 'smarchal.com']);
		  _gaq.push(['_trackPageview']);

		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();

		</script>	

	</head>

	<body>

		<img src="<?php echo _IMG; ?>in-work.png" style="position: absolute; top: 0; right: 0; z-index: 99;">

		<section id="container">

			<h1>Samuel Marchal - Développeur Intégrateur</h1>

			<nav>
				<a href="<?php echo _ROOT; ?>" id="logo">smarchal.com</a>
				<a href="#intro" id="introlink" class="internal selected">Présentation</a>
				<a href="#dev" class="internal">Développement</a>
				<a href="#music" class="internal">Musique</a>
				<a href="#contact" class="internal">Contact</a>
				<a href="#credits" class="internal">Crédits</a>
			</nav>

			<p class="clearfix">&nbsp;</p>

			<article id="intro" name="intro" class="content selected">
				<h2>Présentation</h2>
				<img src="<?php echo _IMG; ?>sam.jpg" width="120" height="120">
				<p>
					Samuel Marchal<br>
					Développeur intégrateur web pour l'agence <a href="http://www.alancia.fr" class="external">Alancia</a><br>
				<p>
				<p class="clearfix">&nbsp;</p>
				<br>
				<p>
					Cyberdépendant confirmé, je considère que la curiosité est une chose essentielle dans mon métier.<br>
					Développeur logiciel de formation (Java), je n'ai pu réfréner mon envie grandissante de migrer vers le Web.
					Cette source intarrissable de contenus constamment renouvellés répond entièrement à mon besoin de découvrir,
					et me permet de m'améliorer jour après jour tout en prenant plaisir à tester les dernières nouveautés.
				</p>
				<a href="#" class="up">Haut de page</a>
			</article>
			
			<article id="dev" name="dev" class="content">
				<h2>Développement</h2>
				<p>
					Google &bull;     
					jQuery &bull; 
					HTML 5 &bull;
					CSS 3 &bull;
					PHP 5 &bull;
					POO &bull;
					Design Patterns &bull;
					MySQL &bull;
					Java &bull;
					Responsive Design &bull;
				</p>
				<a href="#" class="up">Haut de page</a>
			</article>
			
			<article id="music" name="music" class="content">
				<h2>Musique</h2>
				<p>
					Guitariste depuis des années déjà, j'ai été bercé par de grands noms de la Guitare et du Rock comme
					Pink Floyd, Mark Knopfler, Santana, ou Muse plus récemment... Fanatique de l'improvisation, je prends
					plaisir à revisiter des classiques de bien des genres : Blues, Rock Progressif, Rock 'n' Roll, Hard Rock...
					Assez prompt à découvrir de nouveaux genres, je suis plutôt amateur des web-radios éclectiques.
				</p>
				<a href="#" class="up">Haut de page</a>
			</article>
			
			<article id="contact" name="contact" class="content">
				<h2>Contact</h2>
				<a class="social external" href="https://www.twitter.com/zessx"><img src="<?php echo _IMG; ?>twitter.png" alt="Twitter"></a>
				<a class="social external" href="https://plus.google.com/u/0/110107248918096584330/posts"><img src="<?php echo _IMG; ?>google.png" alt="Google"></a>
				<a class="social external" href="http://www.viadeo.com/profile/002kn1d41266rae"><img src="<?php echo _IMG; ?>viadeo.png" alt="Viadeo"></a>
				<a class="social external" href="http://www.linkedin.com/profile/view?id=92218996"><img src="<?php echo _IMG; ?>linkedin.png" alt="Linked In"></a>
				<a class="social external" href="https://www.facebook.com/marchal.samuel"><img src="<?php echo _IMG; ?>facebook.png" alt="Facebook"></a>
				<p class="clearfix">&nbsp;</p>
				<a href="#" class="up">Haut de page</a>
			</article>

			<article id="credits" name="credits" class="content">
				<h2>Crédits</h2>
				<p>Conception &amp; développement :</p>
					<a href="<?php echo _ROOT; ?>" class="seemore">Samuel Marchal</a>
				<p>Identité graphique :</p>
					<a href="<?php echo _ROOT; ?>" class="seemore">Samuel Marchal</a>
				<p>Crédits photo :</p>
					<a href="http://www.fotopedia.com/users/oGrgsfdBDZM" class="external seemore">André Myette <i>via Fotopedia</i></a>
				<br>

				<h3>Technologies utilisées</h3>
				<p>normalize.css :</p>
					<i><a href="http://necolas.github.com/normalize.css/" class="external seemore">necolas.github.com/normalize.css</a></i>
				<p>jQuery :</p>
					<i><a href="http://jquery.com/" class="external seemore">jquery.com</a></i></p>
				<p>Supersized :</p>
					<i><a href="http://www.buildinternet.com/project/supersized/" class="external seemore">buildinternet.com/project/supersized</a></i>
				<p>CSS3 Media Queries :</p>
					<i><a href="http://code.google.com/p/css3-mediaqueries-js/" class="external seemore">code.google.com/p/css3-mediaqueries-js</a></i>
				<a href="#" class="up">Haut de page</a>
			</article>

		</div>

	</body>
</html>
