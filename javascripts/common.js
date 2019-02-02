$(document).ready(function(){
	$(".nav-tab").hover(function(){
		var getIndex = $(this).index();
		$(".nav-tab").eq(getIndex).addClass('active');
	}, function(){
		var getIndex = $(this).index();
		$(".nav-tab").eq(getIndex).removeClass('active');
	});
});