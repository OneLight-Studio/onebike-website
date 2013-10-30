<?php

class View {
	
	public static function get($file) {
		if (file_exists(VIEW_DIR.Prop::lang().DS.$file.'.php')) {
			require VIEW_DIR.Prop::lang().DS.$file.'.php';
		} else {
			require VIEW_DIR.'default'.DS.$file.".php";
		}
	}

}

?>