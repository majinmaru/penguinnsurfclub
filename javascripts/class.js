$(document).ready(function(){
	$(".icon-tab").hover(function(){
		$(this).find('.tab-img__icon-effect').addClass('effect');
	}, function(){
		$(this).find('.tab-img__icon-effect').removeClass('effect');
	});

	$(".class-info__review").mCustomScrollbar({
		axis:"x",
		theme:"minimal-dark"
	});

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
});