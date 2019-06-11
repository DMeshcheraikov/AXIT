'use strict';

(function($) {
    $(function() {
     
      $('ul.tabs-caption').on('click', 'li:not(.active)', function() {
        
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').css('display', 'none').eq($(this).index()).slideDown(1000).addClass('active');

      });
		});
})(jQuery);

// (function () {
// 	$(function checkInput () {
// 		if	($('.form-item__input').val().length >= 1)
// 			$('.form-item__input').toggleClass('form-item__input_active');
// 		else ($('form-item__input_active').val().length == 0)
// 			$('form-item__input_active').toggleClass('form-item__input_active');
// });
// }(jQuery));

function mediaQuerie(direction, n) {
	return window.matchMedia(`(${direction}-width: ${n}px)`).matches
}

function toggleSlider(selector, media, options) {
  var elem = $(selector);

  getSlider();
  $(window).resize(getSlider);

  function getSlider(){
       if (mediaQuerie('max', media)) {
          elem.not('.slick-initialized').find(selector +'__col').removeAttr('style');
          elem.not('.slick-initialized').slick(options);
       } else {
          elem.closest('.slick-initialized').slick('unslick') 
       }
  }
}

$('.form-item__input').focus(function(){
	$(this).addClass('form-item__input_active');
});



toggleSlider('.selection-grid', 1135, {
	responsive: [
			{
				breakpoint: 1135,
				settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 965,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
});

toggleSlider('.payment-grid', 1135, {
	responsive: [
			{
				breakpoint: 1135,
				settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
					dots: false
				}
			},
			{
				breakpoint: 810,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
});
