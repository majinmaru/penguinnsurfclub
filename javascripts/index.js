$(document).ready(function(){
	var slide = $(".visual-slide");
	var dirBtn = $(".dir-btn");
	var dirBtnNext = dirBtn.filter('.next');
	var autorun;
	var autoRent;
	var slideDuration = 500;
	
	function imgSetting(){
		var windowWidth = $(window).width();
		if(windowWidth <= 768){
			$("#visual-slide-01").find('.main-slide-wrapper img').attr('src', 'images/index/mobile-slide-001.jpg');
			$("#visual-slide-02").find('.main-slide-wrapper img').attr('src', 'images/index/mobile-slide-002.jpg');
			$("#visual-slide-03").find('.main-slide-wrapper img').attr('src', 'images/index/mobile-slide-003.jpg');
		}
	}
	imgSetting();

	$("#visual-slide-01").addClass('current');
	$("#visual-slide-01").find(".main-slide-wrapper").addClass('current');
	$("#visual-slide-01").find(".main-cont__bar").addClass('current');
	$("#visual-slide-01").find(".bottom-sub-slide").addClass('current');
	setTimeout(function(){
		$("#visual-slide-01").find(".main-slide-num").addClass('current');
	}, 1000);
	setTimeout(function(){
		$("#visual-slide-01").find(".wave-text-wrapper").addClass('current');
	}, 500);
	setTimeout(function(){
		$("#visual-slide-01").find(".bottom-main-cont").addClass('current');
	}, 1000);
	$(".dir-btn.prev").addClass('current');
	setTimeout(function(){
		$(".dir-btn.next").addClass('current');
	}, 300);
	function runSlide(currentSlideIndex, currentSlide){
		var nextItem = slide.eq(currentSlideIndex);
		currentSlide.removeClass('current');
		currentSlide.find(".main-slide-wrapper").removeClass('current');
		currentSlide.find(".main-cont__bar").removeClass('current');
		currentSlide.find(".bottom-sub-slide").removeClass('current');
		setTimeout(function(){
			currentSlide.find(".main-slide-num").removeClass('current');
		}, 1000);
		setTimeout(function(){
			currentSlide.find(".wave-text-wrapper").removeClass('current');
		}, 500);
		setTimeout(function(){
			currentSlide.find(".bottom-main-cont").removeClass('current');
		}, 1000);
		currentSlide.removeClass('current');
		setTimeout(function(){
			currentSlide.removeClass('current');
		}, 300);

		nextItem.find(".main-slide-wrapper").addClass('current');
		nextItem.find(".main-cont__bar").addClass('current');
		nextItem.find(".bottom-sub-slide").addClass('current');
		setTimeout(function(){
			nextItem.find(".main-slide-num").addClass('current');
		}, 1000);
		setTimeout(function(){
			nextItem.find(".wave-text-wrapper").addClass('current');
		}, 500);
		setTimeout(function(){
			nextItem.find(".bottom-main-cont").addClass('current');
		}, 1000);
		nextItem.addClass('current');
		setTimeout(function(){
			nextItem.addClass('current');
		}, 300);
	}


	dirBtn.on('click', function(e){
		e.preventDefault();
		var currentSlide = slide.filter(".current");
		var currentSlideIndex = currentSlide.index();
		var nextSlideIndex;
		if($(this).hasClass('prev')){
			nextSlideIndex = currentSlide.prev().index();
			currentSlideIndex = nextSlideIndex >= 0 ? nextSlideIndex : slide.last().index();			
		}
		if($(this).hasClass('next')){
			nextSlideIndex = currentSlide.next().index();
			currentSlideIndex = nextSlideIndex >= 0 ? nextSlideIndex : slide.first().index();			
		}
		runSlide(currentSlideIndex, currentSlide);
	})
	function autorunSlide(){
		autoRun = setInterval(function() {
            dirBtn.last().click();
        }, 5000);        
	}
	autorunSlide();

	function resetAutorun(){
		dirBtn.click(function(e){
			e.preventDefault();
			clearInterval(autoRun);
			autorunSlide();
		});
	}
	resetAutorun();
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
/*
	function runSlide(currentSlideIndex, currentSlide){
		let $nextItem = slide.eq(currentSlideIndex);
		$nextItem.addClass('current').siblings().removeClass('current');
	}
	runSlide();

	dirBtn.click(function(e){
		e.preventDefault();
		let currentSlide = slide.filter(".current");
		let currentSlideIndex = currentSlide.index();
		let nextSlideIndex;
		if($(this).hasClass('prev')){
			nextSlideIndex = currentSlide.prev().index();
			currentSlideIndex = nextSlideIndex >= 0 ? nextSlideIndex : slide.last().index();			
		}
		if($(this).hasClass('next')){
			nextSlideIndex = currentSlide.next().index();
			currentSlideIndex = nextSlideIndex >= 0 ? nextSlideIndex : slide.first().index();			
		}
		runSlide(currentSlideIndex, currentSlide);
	})

	function autorunSlide(){
		autoRun = setInterval(function() {
            dirBtn.last().click();
        }, 5000);
	}
	autorunSlide();
*/
	function parallaxScroll(){
		var divTop = $(".intro-image").offset().top;
		var scrolled = $(window).scrollTop();
		var windowWidth = $(window).width();
		if(windowWidth > 1024) {
			$(".gallery-wrapper").css('background-position-y' , (400-(scrolled*.2))+'px')
		} else if (1024 >= windowWidth > 768) {
			$(".gallery-wrapper").css('background-position-y' , (400-(scrolled*.23))+'px')
		} else if (windowWidth <= 768) {
			$(".gallery-wrapper").css('background-position-y' , (400-(scrolled*.15))+'px')
		}
		//$(".intro-image").children('img').css({
		//	'transform' : 'translateY(' + (350-(scrolled*.2))+'px)',
		//	'-webkit-transform' : 'translateY(' + (350-(scrolled*.2))+'px)',
		//	'-ms-transform' : 'translateY(' + (350-(scrolled*.2))+'px)'
		//});
	}

	function classTitle(){
		var titleTop = $("#class-container-title").offset().top;
		var scrolled = $(window).scrollTop();
		var windowWidth = $(window).width();
		if(windowWidth > 768){
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
		} else if (windowWidth <= 768){
			if (scrolled > titleTop * 0.1){
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
	}
	function location(){
		var introTop = $(".location-wrapper").offset().top;
		var scrolled = $(window).scrollTop();
		var windowWidth = $(window).width();
		if(windowWidth > 768){
			if (scrolled > introTop * 0.7){
				$(".location-wrapper .location-intro.left").addClass('appear-ltr');
				setTimeout(function(){
					$(".location-wrapper .location-intro.right").addClass('appear-rtl');
				}, 500);
			}
		} else if (windowWidth <= 768){
			if (scrolled > introTop * 0.8){
				$(".location-wrapper .location-intro.left").addClass('appear-ltr');
				setTimeout(function(){
					$(".location-wrapper .location-intro.right").addClass('appear-rtl');
				}, 500);
			}
		}
	}

	function rentalTitle(){
		var titleTop = $("#rental-container-title").offset().top;
		var scrolled = $(window).scrollTop();
		var windowWidth = $(window).width();
		if(windowWidth > 768){
			if (scrolled > titleTop * 0.8){
				$("#rental-container-title .title-line").addClass('appear');
				setTimeout(function(){
					$("#rental-container-title .title").addClass('appear');
				}, 500);
			}
		} else if (windowWidth <= 768){
			if (scrolled > titleTop * 0.9){
				$("#rental-container-title .title-line").addClass('appear');
				setTimeout(function(){
					$("#rental-container-title .title").addClass('appear');
				}, 500);
			}
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
	$(window).resize(function(){
		imgSetting();
	});
});