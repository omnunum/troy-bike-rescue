var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);

(function() {

	'use strict';
	app.init();

	//initializes with the about content active
	$('#content-about').toggleClass('active-content');
	$('#about').toggleClass('active-tab');
	$('#menu-title').text($('#about').text());
})();

$(document).ready(function() {
	'use strict';
	//when each tab is clicked it marks itself as active and marks all other tabs inactive
	$('.tab a').click(function () {
		//unselects all other tabs and content
		$('.active-tab').toggleClass('active-tab');
		$('.active-content').toggleClass('active-content');
		//switches the content when a new tab is clicked
		//matches content id with tab id
		var thisID = $(this).parent().attr('id');
		$('#content-' + thisID).toggleClass('active-content');
		$(this).parent().toggleClass('active-tab');
		//closes menu and sets the title to the active content title
		$('.menu').removeClass('open-drawer');
		$('#menu-title').text($(this).text());
		//scrolls down to the active content
		$('html, body').animate({
		scrollTop: $('#content-container').offset().top - $('nav').height()
		}, 500);
	});

	//toggles the menu drawer to open when the menu button is clicked
	$('#menu-icon').click(function() {
		$('.menu').toggleClass('open-drawer');
	});
	//sets a waypoint at the active content position offset by 
	//the menu so that when the menu passes the content title
	//the menu title fades in or out
	$('#content-container').waypoint(function() {
  		$('#menu-title').toggleClass('fade-in');
	});
});

