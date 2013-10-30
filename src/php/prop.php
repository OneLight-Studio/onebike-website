<?php

class Prop {

	private static $props;
	private static $isDev;

	static public function get($key) {
		if (self::$props == null)
			self::init();

		return self::$props[$key];
	}

	static public function lang() {
		return strtolower(substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2));
	}

	public static function isDev() {
		if (self::$props == null)
			self::init();

		return self::$isDev;
	}

	private static function init() {
		$properties = json_decode(file_get_contents(BASE_DIR."properties.json"), true);

		self::$props = $properties['common'];

		self::setEnvWithDomain($properties['dev']['dev_domain_to_check']);

		if (self::isDev()) {
			self::$props = array_merge(self::$props, $properties['dev']);
		} else {
			self::$props = array_merge(self::$props, $properties['prod']);
		}
	}

	private static function setEnvWithDomain($domainToCheck) {
		self::$isDev = (!!preg_match($domainToCheck, $_SERVER['SERVER_NAME']));
	}

}

?>