var initWidth;
var body;

window.onload = function() {
	initWidth = pageSize().width;
	body = document.getElementsByTagName("body")[0];

	if (pageSize().width > 1100) {
		Nav.init(['onebike','stations','search','winner','download','about']);

		id('main-onebike-img').onclick = function() {
			Nav.nextArticle();
		};
	}
};

window.onresize = function() {
	//Reload page on navigation mode change
	if ((pageSize().width > 1100 && initWidth < 1100) || (pageSize().width < 1100 && initWidth > 1100)) {
		id('main-content').style.display = "none";
		window.location.reload();
		return true;
	}
}