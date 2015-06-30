$(window).on('scroll', function() {
    var scrolled = $(this).scrollTop();
	var active = $('.footer-right').offset().top;
	console.log('page_pos:'+scrolled);
	console.log('footer_active_pos:'+active);
	console.log('footer_initial_pos:'+footer_initial_pos);

    $('.footer-right').filter(function() {
         return scrolled >= $(this).offset().top-60;
    }).addClass('fixed');
	
    $('.footer-right').filter(function() {
         return scrolled < footer_initial_pos-60;
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
