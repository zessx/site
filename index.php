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
        $root       = $_SERVER['REMOTE_ADDR'] == '127.0.0.1' ? 'http://localhost/smarchal/v7/' : 'http://smarchal.com/';
        $extension  = preg_replace('/^.+\.(css|js|png|jpe?g|ico)$/i', '$1', $filename);
        $folder     = $folders[$extension];
        $file       = implode(array(
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Grayscale - Free One Page Theme for Bootstrap 3</title>

    <link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300' rel='stylesheet' type='text/css'>
    <link href="<?php echo asset('app.css') ?>" rel="stylesheet">
    <link href="<?php echo asset('favicon.ico')?>" rel="shortcut icon" type="image/x-icon">

</head>

<body id="page-top" data-spy="scroll" data-target=".navbar-custom">

    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                    <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="#page-top">
                    <i class="zessxr"></i>
                </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
                <ul class="nav navbar-nav">
                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
                    <li class="hidden">
                        <a href="#page-top"></a>
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
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <section class="intro">
        <div class="intro-body">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-md-offset-1">
                        <h1 class="brand-heading">Samuel Marchal <span class="">- zessx</span></h1>
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
                <p>Grayscale is a premium quality, free Bootstrap 3 theme created by Start Bootstrap. It can be yours right now, all you need to do is download the template on the preview page. You can use this template for any purpose, personal or commercial.</p>
                <p>This striking, black and white theme features stock photographs by <a href="http://gratisography.com/">Gratisography</a> along with a custom Google Map skin courtesy of <a href="http://snazzymaps.com/">Snazzy Maps</a>.</p>
                <p>With this template, just the slightest splash of color can make a huge impact on the overall presentation and design.</p>
            </div>
        </div>
    </section>

    <section id="works" class="content-section text-center">
        <div class="works-section">
            <div class="container">
                <div class="col-lg-8 col-lg-offset-2">
                    <h2>My works</h2>
                    <ul class="list-inline banner-works">
                        <li class="work-monsterflat"><a href="http://smarchal.com/monsterflat" class="external" title="Monsterflat">Monsterflat</a></li>
                        <li class="work-twbscolor"><a href="http://smarchal.com/twbscolor" class="external" title="TWBSColor">TWBSColor</a></li>
                        <li class="work-24ss"><a href="http://smarchal.com/24ss" class="external" title="24SSGrid">24SSGrid</a></li>
                    </ul>
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
                    <li><a href="https://github.com/zessx" class="external" title="Github"><i class="icon-github-circled"></i></a></li>
                    <li><a href="http://stackoverflow.com/users/1238019/zessx" class="external" title="Stackoverflow"><i class="icon-stackoverflow"></i></a></li>

                    <li><a href="http://fr.viadeo.com/fr/profile/samuel.marchal2" class="external" title="Viadeo"><i class="icon-viadeo"></i></a></li>
                    <li><a href="http://www.linkedin.com/pub/samuel-marchal/26/a73/584" class="external" title="Linkedin"><i class="icon-linkedin"></i></a></li>
                    <li><a href="http://careers.stackoverflow.com/zessx" class="external" title="Careers"><i class="icon-careers"></i></a></li>

                    <li><a href="https://www.twitter.com/zessx" class="external" title="Twitter"><i class="icon-twitter"></i></a></li>
                    <li><a href="https://www.facebook.com/marchal.samuel" class="external" title="Facebook"><i class="icon-facebook"></i></a></li>
                    <li><a href="https://google.com/+SamuelMarchal-zessx" class="external" title="Google+"><i class="icon-gplus"></i></a></li>

                    <li><a href="http://blog.smarchal.com" class="external" title="Rss"><i class="icon-rss"></i></a></li>
                </ul>
            </div>
        </div>
    </section>

    <div id="map"></div>

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
