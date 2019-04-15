$(document).ready(function(){
	function mapTitle(){
		$("#map-container-title .title-line").addClass('appear');
		setTimeout(function(){
			$("#map-container-title .title").addClass('appear');
		}, 500);		
	}
	mapTitle();

	function introduceTitle(){
		var titleTop = $("#introduce-container-title").offset().top;
		var scrolled = $(window).scrollTop();
		if (scrolled > titleTop * 0.4){
			$("#introduce-container-title .title-line").addClass('appear');
			setTimeout(function(){
				$("#introduce-container-title .title").addClass('appear');
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
			setTimeout(function(){
				$("#snap-container-title .description").addClass('appear');
				$("#snap-container-title .button").addClass('appear');
			}, 800);
		}
	}
	/*
	$(".introduce-part").eq(0).paroller({
		factor: -0.1,
		type: 'foreground',
		direction: 'vertical',
		transition: 'transform 0.5s linear'
	});
	*/	
	$(".introduce-part").eq(1).paroller({
		factor: -0.05,
		factorXs: -0.07,
		type: 'foreground',
		direction: 'vertical',
		transition: 'transform 0.3s linear'
	});

	$(".introduce-part").eq(2).paroller({
		factor: -0.08,
		factorXs: -0.1,
		type: 'foreground',
		direction: 'vertical',
		transition: 'transform 0.3s linear'
	});
/*
	function introduce(){
		var titleTopFirst = $(".introduce-part").eq(0).offset().top;
		var titleTopSecond = $(".introduce-part").eq(1).offset().top;
		var scrolled = $(window).scrollTop();
		var translateFirst = (scrolled - titleTopFirst) / $(window).height() * 80;
		var translateSecond = (scrolled - titleTopSecond) / $(window).height() * 70;
		var windowWidth = $(window).width();
		if(windowWidth > 768){
			if (scrolled > titleTopFirst * 0.9){
				$(".introduce-part").eq(0).css({
					'transform': 'translateY(' + translateFirst +'%)',
					'-webkit-transform' : 'translateY(' + translateFirst +'%)',
					'-ms-transform': 'translateY(' + translateFirst +'%)'
				});
			}
			if (scrolled > titleTopSecond * 0.9){
				$(".introduce-part").eq(1).css({
					'transform': 'translateY(' + translateSecond +'%)',
					'-webkit-transform' : 'translateY(' + translateSecond +'%)',
					'-ms-transform': 'translateY(' + translateSecond +'%)'
				});
			}
		}
	}
*/
	$(window).scroll(function() {
		introduceTitle()	
		snapTitle();
		//introduce();
	});
});