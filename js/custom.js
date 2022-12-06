
$(document).ready(function(){


function myFocus(x){
	x.style.background='white';
					}
/*  -----jQuery start-----*/
	
		/*----------menubar active start--------*/
		$('#main-menu').on('click','li',function(){
			$('#main-menu li.active').removeClass('active');
			$(this).addClass('active');
			
		});
		/* ----------- menubar start -------*/
		$('#mobile-icon').click(function(){
			$('main-menu ul').sliderToggle(1000);
		});
		$(window).resize(function(){
			if($(window).width() > 576 ){
				$('#main-menu ul').show();
			}else{
				$('#main-menu ul').hide();
				
			}
			
			
		});
				
	/* upper button scroll start */
	
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		if(x >1000){
			$('#upper').fadeIn(1000);
			
		}else{
			$('#upper').fadeOut(1000);
			
		}
		
	});
	$('#upper').click(function(){
		$('html').animate({scrollTop: 0},2000);
		
		
	})
	
});