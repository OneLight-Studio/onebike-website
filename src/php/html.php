<?php

class Html {
	public static $HTML_LANG = array(
		'fr' => 'fr-FR',
		'en' => 'en-US'
	);

	public static function lang() {
		if (isset(self::$HTML_LANG[Prop::lang()])) {
			$lang = self::$HTML_LANG[Prop::lang()];
		} else {
			$lang = self::$HTML_LANG['fr'];
		}

		echo 'lang="'.$lang.'"';
	}

	public static function js() {
		foreach(Prop::get('js_files') as $file) {
			echo '<script src="'.$file.self::fileVersion().'.js"></script>';
		}
	}

	public static function img($name) {
		echo 'img/'.$name.self::fileVersion().'.png';
	}

	public static function css() {
		if (Prop::isDev()) {
			echo '
			<link rel="stylesheet/less" type="text/css" href="less/styles'.self::fileVersion().'.less">
	        <script type="text/javascript">
	            less = {
	                env: "development"
	            };
	        </script>
	        <script src="js/lib/less.js" type="text/javascript"></script>
			';
		} else {
			echo '<link rel="stylesheet" type="text/css" href="css/styles'.self::fileVersion().'.css" media="all" />';
		}
	}

	private static function fileVersion() {
		if (Prop::isDev()) {
			return '_'.time();
		} else {
			return "_v".Prop::get("version");
		}
	}
}