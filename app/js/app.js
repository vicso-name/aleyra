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


	$('.slider-single').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		adaptiveHeight: true,
		infinite: false,
	   useTransform: true,
		speed: 400,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
	});
   
	$('.slider-nav')
		.on('init', function(event, slick) {
			$('.slider-nav .slick-slide.slick-current').addClass('is-active');
		})
		.slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: false,
			vertical: true,
			focusOnSelect: false,
			infinite: false,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			}, {
				breakpoint: 640,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
			   }
			}, {
				breakpoint: 420,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
		   }
			}]
		});
   
	$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
		$('.slider-nav').slick('slickGoTo', currentSlide);
		var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
		$('.slider-nav .slick-slide.is-active').removeClass('is-active');
		$(currrentNavSlideElem).addClass('is-active');
	});
   
	$('.slider-nav').on('click', '.slick-slide', function(event) {
		event.preventDefault();
		var goToSingleSlide = $(this).data('slick-index');
   
		$('.slider-single').slick('slickGoTo', goToSingleSlide);
	});
  

	//Mobile Menu Trigger

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

	$('#menu-close').on('click', function(){
		$(".mobile-menu__content").removeClass('active');
	})

	//Registeration Form Tabs

	const tabItems = document.querySelectorAll('.tab-item');
	const tabContentItems = document.querySelectorAll('.tab-content-item')

	function selectItem(e){
		//Remove all show and border classes
		removeBorder();
		removeShow();
		//Add border to current tab item
		this.classList.add('tab-border');
		// Grab content item from DOM
		const tabContentItem = document.querySelector(`#${this.id}-content`);
		// Add show class
		tabContentItem.classList.add('show');
	}

	function removeBorder(){
		tabItems.forEach(item=>{
			item.classList.remove('tab-border')
		})
	}

	function removeShow(){
		tabContentItems.forEach(item=>{
			item.classList.remove('show');
		})
	}

	tabItems.forEach(item=>{
		item.addEventListener('click', selectItem);
	});

	//Close register form

	let modal = document.querySelector("#form-register");
	let modalOverlay = document.querySelector("#modal-overlay");
	let closeButton = document.querySelector("#close-registerform");
	let openButton = document.querySelector("#register-button");
	let openButtonMobile = document.querySelector("#register-mobile");

	closeButton.addEventListener("click", function() {
		modal.classList.toggle("closed");
		modalOverlay.classList.toggle("closed");
	});

	openButton.addEventListener("click", function() {
		modal.classList.toggle("closed");
		modalOverlay.classList.toggle("closed");
	});

	openButtonMobile.addEventListener("click", function() {
		modal.classList.toggle("closed");
		modalOverlay.classList.toggle("closed");
	});

	//close/open surface type selection

	let surface_type = document.querySelector("#surface_type");
	let surface_content = document.querySelector("#surface_content");
	let surface_shevron = document.querySelector("#surface-shevron");
	const surfaceItem = document.querySelectorAll('.surface-item');

	surface_type.addEventListener("click", function() {
		surface_content.classList.toggle("open");
		surface_shevron.classList.toggle("openlist");
	});

	function closeSurfaceList(){
		surface_content.classList.remove("open");
	}

	$('.surface-item').on('click', function(){
		let surfaceItemText = $(this).text().toLowerCase();
		$('.fake-selecto__title').html(surfaceItemText);
	})

	surfaceItem.forEach(item=>{
		item.addEventListener('click', closeSurfaceList);
	});

	//mobile filter
	
	let openMobileFilter = document.querySelector('#open-mobile-filter');
	let mobChevron = document.querySelector('#mobchevron');

	openMobileFilter.addEventListener("click", function(){
		mobChevron.classList.toggle("open");
	})



})
