$(document).ready(function(){
	var windowWidth = $(window).width();

	$(".gnb-tab").hover(function(){
		$(this).addClass('current');
	}, function() {
		$(this).removeClass('current');
	});
	$(".sns-tab").hover(function(){
		$(this).find(".sns-tab__tooltip").css('opacity', '1');
	}, function(){
		$(this).find(".sns-tab__tooltip").css('opacity', '0');
	});

	var stickyHeader = function() {
		var stickyHeaderTop = $("#start").offset().top;
		var scrollTop = $(window).scrollTop();
		if(windowWidth > 768){
			if(scrollTop > stickyHeaderTop){
				$(".gnb").addClass('sticky');
				$(".logo").addClass('sticky');
			} else {
				$(".gnb").removeClass('sticky');
				$(".logo").removeClass('sticky');
			}
		}
	}
	$(window).scroll(function() {
		stickyHeader();
	});
});