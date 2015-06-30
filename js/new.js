$(window).on('scroll', function() {
    var scrolled = $(this).scrollTop();
	var active = $('.social').offset().top;
	console.log('page_pos:'+scrolled);
	console.log('.social_active_pos:'+active);
	console.log('div_initial_pos:'+div_initial_pos);

    $('.social').filter(function() {
         return scrolled >= $(this).offset().top-150;
    }).addClass('fixed');
	
  	$('.social').filter(function() {
         return scrolled < div_initial_pos-150;
    }).removeClass('fixed');
});
$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	console.log(scroll);
	if (scroll>500){
		$("#go-to-top").show();	
	} else if (scroll<=500){
		$("#go-to-top").hide();			
	}
});