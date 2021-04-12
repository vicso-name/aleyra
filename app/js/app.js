$(document).ready(function() {

	let lightbox = GLightbox();

	$('.search-icon').on('click', function(){
		if($('.search-icon').hasClass('active')){
			$(this).removeClass('active');
			$('.search-field').removeClass('active');
		}else{
			$('.search-field').addClass('active');
			$(this).addClass('active');
		}
	});

	$('#open-menu').on('click', function(){
		$('.mobile-menu__content').addClass('active')
	});

	$(document).mouseup(function (e){
		let div = $(".mobile-menu__content");
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) { 
			div.removeClass('active');
		}
	});

	  

})
