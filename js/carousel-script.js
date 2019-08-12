var timer = 5000;

var photoPosition = 0;
var max = $('#id-carousel > li').length;
 
	$("#id-carousel > li").eq(photoPosition).addClass('active').css('left','0');
	$("#id-carousel > li").eq(photoPosition + 1).addClass('active').css('left','25%');
	$("#id-carousel > li").eq(photoPosition + 2).addClass('active').css('left','50%');
	$("#id-carousel > li").eq(photoPosition + 3).addClass('active').css('left','75%');
 

	setInterval(function(){ 

		$("#id-carousel > li").removeClass('active');

		$("#id-carousel > li").eq(photoPosition).css('transition-delay','0.25s');
		$("#id-carousel > li").eq(photoPosition + 1).css('transition-delay','0.5s');
		$("#id-carousel > li").eq(photoPosition + 2).css('transition-delay','0.75s');
		$("#id-carousel > li").eq(photoPosition + 3).css('transition-delay','1s');

		if (photoPosition < max - 4) {
			photoPosition = photoPosition + 4; 
		}

		else { 
			photoPosition = 0; 
		}  

		$("#id-carousel > li").eq(photoPosition).css('left','0').addClass('active').css('transition-delay','1.25s');
		$("#id-carousel > li").eq(photoPosition + 1).css('left','25%').addClass('active').css('transition-delay','1.5s');
		$("#id-carousel > li").eq(photoPosition + 2).css('left','50%').addClass('active').css('transition-delay','1.75s');
		$("#id-carousel > li").eq(photoPosition + 3).css('left','75%').addClass('active').css('transition-delay','2s');
	
	}, timer);
