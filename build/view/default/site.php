<!doctype html>
<html lang="fr-FR">
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">
    
    <title>OneBike The smart way to ride, disponible sur Android et iPhone</title>
    <meta name="description" content="OneBike est une application mobile, iPhone et Android, qui permet aux utilisateurs de vélos en libre service d'effectuer facilement leurs recherches de trajets.">
	<meta name="keywords" content="OneBike, application mobile, app, iphone, android, iOS, Google Play, AppStore, vélo libre service, Toulouse, Paris, Lyon, Nantes, Londres, New York, Stockholm, Marseille, Bruxelles, Namur, Séville, OneLight studio, OneLight, mobile, développement, sur mesure, trajets, transports, open data, JCDecaux, OneBikeapp">
    
    <link rel="icon" type="image/png" href="img/favicon.png">

    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300,400' rel='stylesheet' type='text/css'>
    
    <?php Html::css(); ?>
</head>
    <body>
        <div id="main-content">
        <?php View::get("main"); ?>
        </div>

        <?php Html::js(); ?>
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-45442059-1', 'onebikeapp.com');
          ga('send', 'pageview');
        </script>
    </body>
</html>