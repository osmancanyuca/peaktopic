$(document).ready(function() {	
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
		
		$('#login').click(function(e){
				e.stopPropagation();
				$('#login-window').toggle();
				$('#opacity').toggle();
				$('#register').toggle();
				$("#opacity").css({"opacity":"0.8"});
			});		
		
		$(document).click(function(){		
			if($('#login-window').is(':visible')) {
				$('#login-window').toggle();
				$('#opacity').toggle();
				$('#register').toggle();
			}	

		});	
		
		$('#login-window-x').click(function(){		
			if($('#login-window').is(':visible')) {
				$('#login-window').toggle();
				$('#opacity').toggle();
				$('#register').toggle();
			}	

		});	
		
		$('#login-window').click(function(e){
			e.stopPropagation();
		});
		
		$('#feedback').click(function(e){
				e.stopPropagation();
				$('#feedback-window').toggle();
				$('#opacity').toggle();
				$("#opacity").css({"opacity":"0.8"});
			});		
		
		$(document).click(function(){		
			if($('#feedback-window').is(':visible')) {
				$('#feedback-window').toggle();
				$('#opacity').toggle();
			}	

		});	
		
		$('#feedback-window-x').click(function(){		
			if($('#feedback-window').is(':visible')) {
				$('#feedback-window').toggle();
				$('#opacity').toggle();
			}	

		});	
		
		$('#feedback-window').click(function(e){
			e.stopPropagation();
		});
		
		$('#register').click(function(e){
				e.stopPropagation();
				$('#register-window').toggle();
				$('#opacity').toggle();
				$("#opacity").css({"opacity":"0.8"});
			});		
		
		$('#register').click(function(){		
			if($('#register-window').is(':visible')) {
				$('#login-window').toggle();
				$('#opacity').toggle();
				$('#register').toggle();
			}	

		});	
		
		$(document).click(function(){		
			if($('#register-window').is(':visible')) {
				$('#register-window').toggle();
				$('#opacity').toggle();
			}	

		});	
		
		$('#register-window-x').click(function(){		
			if($('#register-window').is(':visible')) {
				$('#register-window').toggle();
				$('#opacity').toggle();
			}	

		});	
		
		$('#register-window').click(function(e){
			e.stopPropagation();
		});
		
		$('#register-top-back').click(function(e){
				e.stopPropagation();
				$('#login-window').toggle();
				$('#register').toggle();
				$('#opacity').toggle();
				$("#opacity").css({"opacity":"0.8"});
			});		
		
		$('#register-top-back').click(function(){		
			if($('#register-window').is(':visible')) {
				$('#register-window').toggle();
				$('#opacity').toggle();
			}	

		});	
});	