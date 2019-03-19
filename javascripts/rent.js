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

	function mobileActive(){
		$(".mobile-active").css('display', 'inline-block');
		$(".mobile-active").addClass('active');
		$(".mobile-active span").eq(0).addClass('active');
		setTimeout(function(){
			$(".mobile-active span").eq(1).addClass('active');
		}, 100);
		setTimeout(function(){
			$(".mobile-active span").eq(2).addClass('active');
		}, 200);
	}


	$(".quickmenu-tab.add").click(function(e){
		var windowWidth = $(window).width();
		if(windowWidth > 768){
			$(".shopbag").addClass('active');
			setTimeout(function(){
				$(".shopbag").removeClass('active');
			}, 1500);
			e.preventDefault();
		} else {
			mobileActive();
			setTimeout(function(){
				$(".mobile-active span").removeClass('active');
				$(".mobile-active span").addClass('go-into');
				$(".shopbag").addClass('done');
			}, 2000);
			setTimeout(function(){
				$(".mobile-active span").removeClass('go-into');
				$(".mobile-active").removeClass('active');
				$(".mobile-active").css('display', 'none');
			}, 2300);
			setTimeout(function(){
				$(".shopbag").removeClass('done');
			}, 2800);
		}
	});
});