$(document).ready(function(){
	$(".slide-nav__tab").click(function(){
		var navTabIndex = $(this).index();

		$(this).addClass('current');
		$(this).siblings().removeClass('current');
		$(".rental-slide").eq(navTabIndex).addClass('active');
		$(".rental-slide").eq(navTabIndex).siblings().removeClass('active');
	});

	var slide = $(".visual-slide");
	var slideMain = slide.find(".slide-main");
	var slideSub = slide.find(".slide-sub");
	var dirBtn = $(".dir-btn");
	var autorun;
	var slideDuration = 500;
	let nextSlideIndex;
	
	function runSlide(currentSlideIndex, currentSlide){
		let $nextItem = slide.eq(currentSlideIndex);
		$nextItem.addClass('current').siblings().removeClass('current');
	}
	runSlide();
	dirBtn.click(function(e){
		e.preventDefault();
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
});