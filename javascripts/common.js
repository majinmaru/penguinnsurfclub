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

	function mobileMenu(){
		$(".nav-mobile").click(function(){
			if($(".gnb").hasClass('.mobile-menu')){
				$(".gnb").animate({
					height: "0"
				}, 500);
				$(".gnb").removeClass('.mobile-menu');
				$(".gnb").css('display', 'none');
				$(".nav-mobile").css('position', 'absolute');
				$(".logo").css('position', 'absolute');
				$("html").css('overflow-y', 'scroll');
			} else {
				$(".gnb").css('display', 'block');
				$(".gnb").addClass('.mobile-menu');
				$(".gnb").animate({
					height: "100vh"
				}, 500);
				$(".nav-mobile").css('position', 'fixed');
				$(".logo").css('position', 'fixed');
				$("html").css('overflow-y', 'hidden')
			}
		});
	}
	mobileMenu();

	$(window).scroll(function() {
		stickyHeader();
	});
});