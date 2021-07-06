var animation1 = false;
var animation2 = false;
var animationPoint1 = 0;
var animationPoint2 = 0;
$(document).ready(function(){
	animationPoint1 = $("#block-1").height();
	animationPoint2 = $("#block-1").height() + $("#block-2").height() + $("#block-3").height()/2;
	
	var swiper = new Swiper("#reviewSwiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		breakpoints: {
			1200: {
				slidesPerView: 3,
				spaceBetween: 0
			}
		}, 
		pagination: {
			el: ".swiper-pagination",
		}
	});
	
});

$(window).scroll(function(e) {	
    var scroll = $(window).scrollTop();
    if( scroll==0 || (scroll%100>0 && scroll<200)) {
		$("#header").addClass("transparent");
	} else {
		$("#header").removeClass("transparent");
	}
    if(scroll%100>0) {
        if(animationPoint1>0 && animationPoint1-scroll<100 && !animation1) {
            $("#block-2 .img").animate({"margin-right":"0"}, "slow");
            animation1 = true;
        }
		if(animationPoint2>0 && animationPoint2-scroll<100 && !animation2) {
            $("#block-4 .img").animate({"margin-left":"0"}, "slow");
            animation2 = true;
        }
    }
});

function scrollToElement(id) {    
    if($("#"+id).length) {
        $("html,body").animate({
            scrollTop: $("#"+id).offset().top
        }, "slow");
        $('#navdrawer').navdrawer('hide');
    } 
}