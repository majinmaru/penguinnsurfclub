$(document).ready(function(){
	var slide = $(".visual-slide");
	var slideMain = slide.find(".slide-main");
	var slideSub = slide.find(".slide-sub");
	var dirBtn = $(".dir-btn");
	var autorun;
	var autoRent;
	var slideDuration = 500;
	var nextSlideIndex;
	/*
	function autorunRent(){
		var numberOfSlide = $(".slide-nav__tab").length;
		for(var i = 0; i < numberOfSlide; i++) {
            autoRent = setInterval(function() {
                $(".slide-nav__tab").eq(i).click();
            }, 5000);
        } 
	}
	autorunRent();
	*/
	function runSlide(currentSlideIndex, currentSlide){
		let $nextItem = slide.eq(currentSlideIndex);
		$nextItem.addClass('current').siblings().removeClass('current');
	}
	runSlide();

	dirBtn.click(function(event){
		let currentSlide = slide.filter(".current");
		let currentSlideIndex = currentSlide.index();
		if($(this).hasClass('prev')){
			nextSlideIndex = currentSlide.prev().index();
			currentSlideIndex = nextSlideIndex >= 0 ? nextSlideIndex : slide.last().index();			
		}
		if($(this).hasClass('next')){
			nextSlideIndex = currentSlide.next().index();
			currentSlideIndex = nextSlideIndex >= 0 ? nextSlideIndex : slide.first().index();			
		}
		runSlide(currentSlideIndex, currentSlide);
		if (event.preventDefault) { 
			event.preventDefault(); 
		} else { 
			event.returnValue = false; 
		}
	})

	function autorunSlide(){
		 if ($("body").css('direction') === 'ltr') {
            autoRun = setInterval(function() {
                dirBtn.last().click();
            }, 5000);
        } else if ($("body").css('direction') === 'rtl') {
            autoRun = setInterval(function() {
                dirBtn.first().click();
            }, 5000);
        }
	}
	autorunSlide();
	
	function parallaxScroll(){
		var divTop = $(".intro-image").offset().top;
		var scrolled = $(window).scrollTop();
		//$(".intro-image").children('img').css({
		//	'transform' : 'translateY(' + (350-(scrolled*.2))+'px)',
		//	'-webkit-transform' : 'translateY(' + (350-(scrolled*.2))+'px)',
		//	'-ms-transform' : 'translateY(' + (350-(scrolled*.2))+'px)'
		//});
		$(".gallery-wrapper").css('background-position-y' , (400-(scrolled*.2))+'px')
	}

	function classTitle(){
		var titleTop = $("#class-container-title").offset().top;
		var scrolled = $(window).scrollTop();
		if (scrolled > titleTop * 0.55){
			$("#class-container-title .title-line").addClass('appear');
			setTimeout(function(){
				$("#class-container-title .title").addClass('appear');
			}, 500);			
			setTimeout(function(){
				$(".class-type").eq(0).addClass('appear');
			}, 500);
			setTimeout(function(){
				$(".class-type").eq(1).addClass('appear');
			}, 800);
			setTimeout(function(){
				$(".class-type").eq(2).addClass('appear');
			}, 1100);
		}
	}
	function location(){
		var introTop = $(".location-wrapper").offset().top;
		var scrolled = $(window).scrollTop();
		if (scrolled > introTop * 0.7){
			$(".location-wrapper .location-intro.left").addClass('appear-ltr');
			setTimeout(function(){
				$(".location-wrapper .location-intro.right").addClass('appear-rtl');
			}, 500);
		}
	}

	function rentalTitle(){
		var titleTop = $("#rental-container-title").offset().top;
		var scrolled = $(window).scrollTop();
		if (scrolled > titleTop * 0.8){
			$("#rental-container-title .title-line").addClass('appear');
			setTimeout(function(){
				$("#rental-container-title .title").addClass('appear');
			}, 500);
		}
	}

	var rentalSlide = function() {
		$(".slide-nav__tab").on('click', function(event){
			var navTabIndex = $(this).index();

			$(this).addClass('current');
			$(this).siblings().removeClass('current');
			$(".rental-slide").eq(navTabIndex).addClass('active');
			$(".rental-slide").eq(navTabIndex).siblings().removeClass('active');
			if (event.preventDefault) { 
				event.preventDefault(); 
			} else { 
				event.returnValue = false; 
			}
		});
	}
	rentalSlide();
	
	/*
	$(".slide-nav__tab").on('click', function(event){
		var navTabIndex = $(this).index();

		$(this).addClass('current');
		$(this).siblings().removeClass('current');
		$(".rental-slide").eq(navTabIndex).addClass('active');
		$(".rental-slide").eq(navTabIndex).siblings().removeClass('active');
		if (event.preventDefault) { 
			event.preventDefault(); 
		} else { 
			event.returnValue = false; 
		}
	});
*/
	$(window).scroll(function() {
		parallaxScroll();
		classTitle();
		location();
		rentalTitle();
	});
});