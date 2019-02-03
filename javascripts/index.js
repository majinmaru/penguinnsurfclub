$(document).ready(function(){
	
	$(".review-content").mCustomScrollbar({
		axis: "x",
		theme: "minimal-dark"
	});

	var slider = $(".slider");
	var sliderWrapper = slider.find(".slider-wrapper");
	var slides = slider.find(".slide");
	var sliderNav = slider.find(".control-navigation");
	var controlArrow = slider.find(".control-arrow-btn");
	var autorun;
	var sliderDuration = 300;
	let nextSliderIndex;

	function resetSize(){
		slides.width(slider.width());
		sliderWrapper.width(slides.width()*slides.length);
	}
	resetSize();
	function createNav(){
		slides.each(function(){
			var navigationDot = $("<div>", {
				attr: {
					class: "navigation-dot"
				}
			})
			sliderNav.append(navigationDot);
			$(".navigation-dot").first().addClass('current');
		});
	}
	createNav();
	function runSlider(nextItemIndex, activeSlideItem){
		let $nextItem = slides.eq(nextItemIndex);
		let $nextNav = $(".navigation-dot").eq(nextItemIndex);
		sliderWrapper.animate({
			"left" : -nextItemIndex * 100 + "%"
		}, sliderDuration, function() {
			activeSlideItem.removeClass('active');
			$nextItem.addClass('active');
		})
		$nextNav.addClass('current').siblings().removeClass('current');
	}

	controlArrow.click(function(e){
		e.preventDefault();
		let activeSlide = slides.filter(".active");
		let activeSliderIndex = activeSlide.index();
		if($(this).hasClass('prev')){
			nextSliderIndex = activeSlide.prev().index();
			activeSliderIndex = nextSliderIndex >= 0 ? nextSliderIndex : slides.last().index();			
		}
		if($(this).hasClass('next')){
			nextSliderIndex = activeSlide.next().index();
			activeSliderIndex = nextSliderIndex >= 0 ? nextSliderIndex : slides.first().index();			
		}
		runSlider(activeSliderIndex, activeSlide);
	})
	function autorunSlider(){
		 if ($("body").css('direction') === 'ltr') {
            autoRun = setInterval(function() {
                controlArrow.last().click();
            }, 7000);
        } else if ($("body").css('direction') === 'rtl') {
            autoRun = setInterval(function() {
                controlArrow.first().click();
            }, 7000);
        }
	}
	autorunSlider();
	$(".navigation-dot").click(function(e){
		e.preventDefault();
		var getIndex = $(this).index();
		var activeSlide = slides.filter('active');
		runSlider(getIndex, activeSlide);
	});

	$(window).on('resize', function() {
        resetSize();
    });
});