<?php
	$error = isset($_GET['erreur']) ? $_GET['erreur'] : -2;
	if($error != 400 && $error != 401 && $error != 403 && $error != 404 && $error != 405 && $error != 500)
		$error = -1;
	switch($error){
		case -2:  $txterror = "[ Tentative de hack ]"; break;
		case 400: $txterror = "[ Erreur 400 : Requète incorrecte ]"; break;
		case 401: $txterror = "[ Erreur 401 : Autorisation refusée ]"; break;
		case 403: $txterror = "[ Erreur 403 : Repertoire interdit ]"; break;
		case 404: $txterror = "[ Erreur 404 : Fichier non trouvé ]"; break;
		case 405: $txterror = "[ Erreur 405 : Méthode non autorisée ]"; break;
		case 500: $txterror = "[ Erreur 500 : Erreur interne du serveur ]"; break;
		case -1: $txterror = "[ Erreur Inconnue ]"; break;
		default: $txterror = "[ Erreur Inconnue ]"; break;
	}
?>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<title><?php echo $txterror; ?></title>
		<link rel="shortcut icon" href="favicon.ico" />

	</head>
	<body>
	<a href="http://www.samsamx.com">Retourner sur www.samsamx.com</a>
	</body>
</html>
