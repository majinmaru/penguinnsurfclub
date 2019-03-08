$(document).ready(function(){
	$(".gnb-tab").hover(function(){
		$(this).addClass('current');
	}, function() {
		$(this).removeClass('current');
	});
});