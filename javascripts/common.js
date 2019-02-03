$(document).ready(function(){
	$(".nav-tab").hover(function(){
		var getIndex = $(this).index();
		$(".nav-tab").eq(getIndex).addClass('active');
	}, function(){
		var getIndex = $(this).index();
		$(".nav-tab").eq(getIndex).removeClass('active');
	});
	$(".sns-tab__icon").hover(function(){
		var snsTabIndex = $(this).parent('.sns-tab').index();
		$(".sns-tab").eq(snsTabIndex).children('.sns-tab__tooltip').css('opacity' , '1');
	}, function(){
		var snsTabIndex = $(this).parent('.sns-tab').index();
		$(".sns-tab").eq(snsTabIndex).children('.sns-tab__tooltip').css('opacity' , '0');
	})
});