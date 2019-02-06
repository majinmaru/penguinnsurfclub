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

/*
	function weatherChange(newIndex){
		var weatherCurrent = $(".weather").filter('current');
		var weatherCurrentTime = weatherCurrent.find(".weather-content__time");
		var weatherCurrentInfoTab = weatherCurrent.find(".info-tab");

		var weather = $(".weather").eq(newIndex);
		var weatherNextTime = weather.find(".weather-content__time");
		var weatherNextInfoTab = weather.find(".info-tab");

		weatherCurrentTime.removeClass('show-up');
		weatherCurrentInfoTab.removeClass('show-up');

		weather.addClass('current').siblings().removeClass('current');

		weatherNextTime.addClass('show-up');
		weatherNextInfoTab.addClass('show-up');
	}
	*/
	function weatherChange(newIndex){
		var weather = $(".weather").eq(newIndex);
		var weatherNextTime = weather.find(".weather-content__time");
		var weatherNextInfoTab = weather.find(".info-tab");
		weather.addClass('current').siblings().removeClass('current');
		weatherNextTime.addClass('show-up');
		weatherNextInfoTab.addClass('show-up');

		var weatherOther = $(".weather").eq(newIndex).siblings();
		var weatherTime = weatherOther.find(".weather-content__time");
		var weatherInfoTab = weatherOther.find(".info-tab");

		weatherTime.removeClass('show-up');
		weatherInfoTab.removeClass('show-up');
	}
	weatherChange(0);
	$(".dir-up").click(function(e){
		e.preventDefault();
		var weather = $(".weather");
		var weatherCurrent = $(".weather").filter(".current");

		if(weatherCurrent.prev().index() >= 0){
			weatherNextIndex = weatherCurrent.prev().index();
		} else {
			weatherNextIndex = weather.last().index();
		}
		weatherChange(weatherNextIndex);
	})
	$(".dir-down").click(function(e){
		e.preventDefault();
		var weather = $(".weather");
		var weatherCurrent = $(".weather").filter(".current");

		if(weatherCurrent.next().index() >= 0){
			weatherNextIndex = weatherCurrent.next().index();
		} else {
			weatherNextIndex = weather.first().index();
		}
		weatherChange(weatherNextIndex);
	})
	function autorunWeather(){
		var autoRun = setInterval(function(){
			$(".dir-down").click();
		}, 4000);
	}
	autorunWeather();
});