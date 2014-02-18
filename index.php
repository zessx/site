<!DOCTYPE html>
<?php
require("define-lang.php");

function age()
{
	$year = date('Y');
	$month = date('n');
	$day = date('j');
	$year_birth = 1989;
	$month_birth = 6;
	$day_birth = 2;
	return $year - $year_birth - ($month < $month_birth || ($month == $month_birth && $day < $day_birth) ? 1 : 0);
}
?>
<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title><?php echo TITLE; ?></title>
		<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
		<script type="text/javascript" src="script/content-image.js"></script>
		<script type="text/javascript" src="script/check-navigator.js"></script>
		<link href="style/default.css" rel="stylesheet" type="text/css">
		<script type="text/javascript">
			if(!isHTML5compatible)
				document.write("<link href=\"style/no-html5.css\" rel=\"stylesheet\" type=\"text/css\">");
		</script>
	</head>

    <body>
		<section>
			<a href="http://www.browserchoice.eu" target="_blank" id="browseralert">
				<script type="text/javascript">
					document.write(display_browser+" "+version);
				</script>
				<?php echo TXT_ALERT_BROWSER; ?>
			</a>
			<nav id="menus">
				<div class="menu" id="m01">
					<div class="mtext"><?php echo TXT_MENU_ETATCIVIL; ?></div>
					<div class="mtitle"><?php echo TXT_TITLE_ETATCIVIL; ?></div>
				</div>
				<div class="menu" id="m02">
					<div class="mtext"><?php echo TXT_MENU_FORMATION; ?></div>
					<div class="mtitle"><?php echo TXT_TITLE_FORMATION; ?></div>
				</div>
					<div class="menu" id="m03">
					<div class="mtext"><?php echo TXT_MENU_EXPERIENCES; ?></div>
					<div class="mtitle"><?php echo TXT_TITLE_EXPERIENCES; ?></div>
				</div>
				<div class="menu" id="m04">
					<div class="mtext"><?php echo TXT_MENU_COMPETENCES; ?></div>
					<div class="mtitle"><?php echo TXT_TITLE_COMPETENCES; ?></div>
				</div>
				<div class="menu" id="m05">
					<div class="mtext"><?php echo TXT_MENU_ACTIVITES; ?></div>
					<div class="mtitle"><?php echo TXT_TITLE_ACTIVITES; ?></div>
				</div>
			</nav>
			<img id="contentImg" src="img/content/none.png" alt="" name="contentImg" width="500px" height="300px" />
		</section>
		<div id="html5line">
			<a href="http://www.w3.org/html/logo/">
				<img src="http://www.w3.org/html/logo/badge/html5-badge-h-css3-semantics.png" width="40" height="16" alt="HTML5 Powered with CSS3 / Styling, and Semantics" title="HTML5 Powered with CSS3 / Styling, and Semantics">
			</a>
		</div>
		<nav id="buttons">
			<a class="btn spec viadeo" target="_blank" href="http://www.viadeo.com/fr/profile/samuel.marchal2"><img src="img/viadeo.png" alt="Viadeo" /></a>
			<a class="btn spec linkedin" target="_blank" href="http://fr.linkedin.com/pub/samuel-marchal/26/a73/584"><img src="img/linkedin.png" alt="LinkedIn" /></a>
			<a class="btn spec twitter" target="_blank" href="http://twitter.com/#!/thesamsamx"><img src="img/twitter.png" alt="Twitter" /></a>
			<a class="btn lang" href="<?php echo URL_LANG_1; ?>"><?php echo TXT_LANG_1; ?></a>
			<a class="btn lang" href="<?php echo URL_LANG_2; ?>"><?php echo TXT_LANG_2; ?></a>
		</nav>
		<footer>
			SMarchal 2011 - <?php echo TXT_BROWSER; ?>
		</footer>
    </body>

</html>