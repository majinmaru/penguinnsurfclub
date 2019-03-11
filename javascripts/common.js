$(document).ready(function(){
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
});