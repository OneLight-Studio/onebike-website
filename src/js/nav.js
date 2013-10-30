(function() {
	var context = this,
		Nav = {};

	context.Nav = Nav;
	
	/* --------------------------
	 * Properties
	 * -------------------------- */
	Nav.elem = id('nav-right'),
	Nav.articles = null;
	Nav.defaultSectionId = null;
	Nav.currentSection = null;

	/* --------------------------
	 * Public Functions
	 * -------------------------- */
	Nav.init = function(articles) {
		var size = pageSize(),
			articleHtml, size;

		//Articles
		Nav.articles = articles;
		Nav.defaultSectionId = Nav.articles[0];

		//Center nav on page
		moveTo(Nav.elem, ((size.height - Nav.elem.offsetHeight) / 2) + "px");
		Nav.elem.style.opacity = "1";

		//Listen to mouse wheel
		document.addEventListener("mousewheel", function(e) {
			if (e.wheelDelta > 0) {
				Nav.prevArticle();
			} else {
				Nav.nextArticle();
			}

			return true;
		});

			//Firefox specific
		document.addEventListener("DOMMouseScroll", function(e) {
			if (e.detail < 0) {
				Nav.prevArticle();
			} else {
				Nav.nextArticle();
			}

			return true;
		});

		//Prepare nav and sections
		size = pageSize();
		for (var articleIndex in Nav.articles) {
			var article = Nav.articles[articleIndex],
				section;

			section = id(article);
			section.style.paddingTop = ((size.height - section.offsetHeight) / 2) + "px";

			articleHtml = id(article+"-menu");
			articleHtml.toShow = article;
			articleHtml.addEventListener("click", function() {
				Nav.show(this.toShow);
			});
		}

		//Finally show the article
		Nav.show();
	};

	Nav.show = function(sectionId) {
		var section = id((sectionId) ? sectionId : Nav.defaultSectionId),
			size = pageSize();
		
		if (Nav.currentSection !== null) {
			var direct = direction(Nav.currentSection.id, sectionId);
			if (section != Nav.currentSection) {
				moveTo(section, (-1 * direct * (size.height + 10))+"px");
				setTimeout(function() {
					moveTo(Nav.currentSection, (direct * Nav.currentSection.offsetHeight - 10)+"px");
					Nav.currentSection.style.opacity = "0";
					Nav.currentSection.style.zIndex = 2;
					moveTo(section, "0px");
					section.style.opacity = "1";
					section.style.zIndex = 3;

					id(Nav.currentSection.id+"-menu").className = "";
					id(section.id+"-menu").className = "current";

					//Switch current
					Nav.currentSection = section;
				}, 500);
			}
		} else {
			section.style.opacity = "1";
			section.style.zIndex = 3;

			id(section.id+"-menu").className = "current";

			Nav.currentSection = section;
		}
	};

	Nav.nextArticle = function() {
		if (!Nav.pushing) {
			var that = this,
				indexFrom;

			Nav.pushing = true;

			//Do stuff
			for (var indexFrom in Nav.articles) {
				if (Nav.articles[indexFrom] == Nav.currentSection.id) {
					break;
				}
			}

			indexFrom++;
			if (indexFrom < Nav.articles.length) {
				Nav.show(Nav.articles[indexFrom]);
			}

			//Remove all other calls
			setTimeout(function() {
				Nav.pushing = false;
			}, 500);
		}
	};

	Nav.prevArticle = function() {
		if (!Nav.pushing) {
			var that = this;

			Nav.pushing = true;

			//Do stuff
			for (var indexFrom in Nav.articles) {
				if (Nav.articles[indexFrom] == Nav.currentSection.id) {
					break;
				}
			}

			indexFrom--;
			if (indexFrom >= 0) {
				Nav.show(Nav.articles[indexFrom]);
			}

			//Remove all other calls
			setTimeout(function() {
				Nav.pushing = false;
			}, 500);
		}
	};

	/* --------------------------
	 * Private Functions
	 * -------------------------- */

	var direction = function(fromVal, toVal) {
		for (var indexFrom in Nav.articles) {
			if (Nav.articles[indexFrom] == fromVal) {
				break;
			}
		}

		for (var indexTo in Nav.articles) {
			if (Nav.articles[indexTo] == toVal) {
				break;
			}
		}

		return (indexTo > indexFrom) ? -1 : 1;
	};

	var moveTo = function(elem, topPx) {
		elem.style.webkitTransform = "translate(0,"+topPx+")";
		elem.style.MozTransform = "translate(0,"+topPx+")";
		elem.style.msTransform = "translate(0,"+topPx+")";
	}
}).call(this);