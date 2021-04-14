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

	//Product Slider
	/*********************
    Thumbnails slider
  *********************/
  // Change the main image whenever a thumbnail button is activated
  $('.thumbnails-slider').on('init', function(e, slider) {
    $(slider.$slides.find('.thumbnail-button')).each(function(index) {
      $(this).on('click', function() {
        // Move aria-current="true" to this button
        $(slider.$slides.find('.thumbnail-button').removeAttr('aria-current'));
        $(this).attr('aria-current', true);

        // Change the main image to match this thumbnail button
        var index = $(this).closest('.slick-slide').data('slick-index');
        $('.main-image-slider').slick('slickGoTo', index);
      });
    });
  });
  
  // Initialize the slider
  $('.thumbnails-slider').slick({
    vertical: true,
    slidesToShow: 4,
    infinite: false,
    instructionsText: 'This carousel contains a column of small thumbnails. Selecting a thumbnail will change the main image in the carousel that follows. Use the Previous and Next buttons to cycle through all the thumbnails, use Enter to select.',
    regionLabel: 'thumbnails carousel'
  });
  
  
  /********************
    Main image slider
  *********************/
  $('.main-image-slider').slick({
    slidesToShow: 1,
    draggable: false,
    instructionsText: 'This carousel shows one large product image at a time. Use the Previous and Next buttons to move between images, or use the preceding thumbnails carousel to select a specific image to display here.',
    regionLabel: 'main image carousel',
  });
  
    // Update the thumbnail slider when the user changes the main slider directly.
    $('.main-image-slider').on('beforeChange', function(e, slider, currentSlide, nextSlide) {
      // Remove aria-current from the last selected thumbnail image button
      $('.thumbnails-slider .thumbnail-button[aria-current="true"]').removeAttr('aria-current');
      
      // Select the thumbnail image button that goes with this main image. Most importantly, this updates Slick's internal state to be consistent with the visual change.
      $('.thumbnails-slider').slick('slickGoTo', nextSlide);

      // Add aria-current="true" to the correct thumbnail image button to convey to screen readers that it's active.
      $('.thumbnails-slider .thumbnail-button:eq(' + nextSlide + ')').attr('aria-current', true);
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
})
