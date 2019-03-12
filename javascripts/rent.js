$(document).ready(function(){
	$(".color-tab").click(function(e){
		if($(this).hasClass('current')){
			$(this).removeClass('current');
		} else {
			$(this).addClass('current');
		}
		e.preventDefault();
	});

	$(".category-tab").click(function(e){
		$(this).addClass('current').siblings().removeClass('current');
		e.preventDefault();
	});

	$(".quickmenu-tab.add").click(function(e){
		$(".shopbag").addClass('active');
		setTimeout(function(){
			$(".shopbag").removeClass('active');
		}, 1500);
		e.preventDefault();
	});
});