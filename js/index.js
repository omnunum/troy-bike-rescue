$(document).ready(function() {

	$(".tab a").click(function () {

	  $("a").removeClass("active");
	  $(this).toggleClass("active");

	});

	$(document).foundation();

});