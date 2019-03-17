$(document).ready(function(){
	$(".icon-tab").hover(function(){
		$(this).find('.tab-img__icon-effect').addClass('effect');
	}, function(){
		$(this).find('.tab-img__icon-effect').removeClass('effect');
	});

	$("#class-info-01 .class-info__review").mCustomScrollbar({
		axis:"x",
		theme:"minimal-dark",
		setLeft: "-150%"
	});
	$("#class-info-02 .class-info__review").mCustomScrollbar({
		axis:"x",
		theme:"minimal-dark"
	});
	$("#class-info-03 .class-info__review").mCustomScrollbar({
		axis:"x",
		theme:"minimal-dark",
		setLeft: "-150%"
	});

	function classSurfTitle(){
		var titleTop = $("#class-info-01").children('.class-info__cont').offset().top;
		var scrolled = $(window).scrollTop();
		if (scrolled > titleTop * 0.4){
			$("#class-info-01 .text-title-line").addClass('appear');
			setTimeout(function(){
				$("#class-info-01 .text-title").addClass('appear');
			}, 500);
			setTimeout(function(){
				$("#class-info-01 .text-desc").addClass('appear');
			}, 800);
			setTimeout(function(){
				$("#class-info-01 .benefit-tab").eq(0).addClass('appear');
			}, 800);
			setTimeout(function(){
				$("#class-info-01 .benefit-tab").eq(1).addClass('appear');
			}, 900);
			setTimeout(function(){
				$("#class-info-01 .benefit-tab").eq(2).addClass('appear');
			}, 1000);
			setTimeout(function(){
				$("#class-info-01 .btn-name").addClass('appear');
			}, 1100);
			$("#class-info-01 .review-card ").eq(0).addClass('appear');
			setTimeout(function(){
				$("#class-info-01 .review-card ").eq(1).addClass('appear');
			}, 100);
			setTimeout(function(){
				$("#class-info-01 .review-card ").eq(2).addClass('appear');
			}, 200);
			setTimeout(function(){
				$("#class-info-01 .review-card ").eq(3).addClass('appear');
			}, 300);
		}
	}
	function classPaddleTitle(){
		var titleTop = $("#class-info-02").children('.class-info__cont').offset().top;
		var scrolled = $(window).scrollTop();
		if (scrolled > titleTop * 0.6){
			$("#class-info-02 .text-title-line").addClass('appear');
			setTimeout(function(){
				$("#class-info-02 .text-title").addClass('appear');
			}, 500);
			setTimeout(function(){
				$("#class-info-02 .text-desc").addClass('appear');
			}, 800);
			setTimeout(function(){
				$("#class-info-02 .benefit-tab").eq(0).addClass('appear');
			}, 800);
			setTimeout(function(){
				$("#class-info-02 .benefit-tab").eq(1).addClass('appear');
			}, 900);
			setTimeout(function(){
				$("#class-info-02 .benefit-tab").eq(2).addClass('appear');
			}, 1000);
			setTimeout(function(){
				$("#class-info-02 .btn-name").addClass('appear');
			}, 1100);
			$("#class-info-02 .review-card ").eq(0).addClass('appear');
			setTimeout(function(){
				$("#class-info-02 .review-card ").eq(1).addClass('appear');
			}, 100);
			setTimeout(function(){
				$("#class-info-02 .review-card ").eq(2).addClass('appear');
			}, 200);
			setTimeout(function(){
				$("#class-info-02 .review-card ").eq(3).addClass('appear');
			}, 300);
		}
	}

	function classSkiTitle(){
		var titleTop = $("#class-info-03").children('.class-info__cont').offset().top;
		var scrolled = $(window).scrollTop();
		if (scrolled > titleTop * 0.8){
			$("#class-info-03 .text-title-line").addClass('appear');
			setTimeout(function(){
				$("#class-info-03 .text-title").addClass('appear');
			}, 500);
			setTimeout(function(){
				$("#class-info-03 .text-desc").addClass('appear');
			}, 800);
			setTimeout(function(){
				$("#class-info-03 .benefit-tab").eq(0).addClass('appear');
			}, 800);
			setTimeout(function(){
				$("#class-info-03 .benefit-tab").eq(1).addClass('appear');
			}, 900);
			setTimeout(function(){
				$("#class-info-03 .benefit-tab").eq(2).addClass('appear');
			}, 1000);
			setTimeout(function(){
				$("#class-info-03 .btn-name").addClass('appear');
			}, 1100);
			$("#class-info-03 .review-card ").eq(0).addClass('appear');
			setTimeout(function(){
				$("#class-info-03 .review-card ").eq(1).addClass('appear');
			}, 100);
			setTimeout(function(){
				$("#class-info-03 .review-card ").eq(2).addClass('appear');
			}, 200);
			setTimeout(function(){
				$("#class-info-03 .review-card ").eq(3).addClass('appear');
			}, 300);
		}
	}

	//enable scrollY
    $(".class-info__review").on('mousewheel',function(e){    	
		var wheelDelta = e.originalEvent.wheelDelta;
		if(wheelDelta > 0){			
			$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
		}else{		
			$(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
		}
		e.preventDefault();
	});

	$(".cost-tab__choose").click(function(e){
		var thisIndex = $(this).parents(".cost-tab").index();
		if($(".cost-tab").eq(thisIndex).hasClass('choose')){
			$(".cost-tab").eq(thisIndex).removeClass('choose');
		} else {
			$(".cost-tab").eq(thisIndex).addClass('choose');
		}
		e.preventDefault();
	});

	$(window).scroll(function() {
		classSurfTitle();
		classPaddleTitle();
		classSkiTitle();
	});
});