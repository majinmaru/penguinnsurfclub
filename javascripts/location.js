$(document).ready(function(){
	function mapTitle(){
		var titleTop = $("#map-container-title").offset().top;
		var scrolled = $(window).scrollTop();
		if (scrolled > titleTop * 0.3){
			$("#map-container-title .title-line").addClass('appear');
			setTimeout(function(){
				$("#map-container-title .title").addClass('appear');
			}, 500);
		}
	}
	function snapTitle(){
		var titleTop = $("#snap-container-title").offset().top;
		var scrolled = $(window).scrollTop();
		if (scrolled > titleTop * 0.7){
			$("#snap-container-title .title-line").addClass('appear');
			setTimeout(function(){
				$("#snap-container-title .title").addClass('appear');
			}, 500);
		}
	}

	$(window).scroll(function() {
		mapTitle();
		snapTitle();
	});
});