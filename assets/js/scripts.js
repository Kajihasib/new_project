(function ($) {
	'use strict';

	var btn = $('.scrollTopBtn');
	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
			$('.seller-popup').css('bottom', '80px');
		} else {
			$('.seller-popup').css('bottom', '10px');
			btn.removeClass('show');
		}
	});
	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '300');
	});
})(jQuery);
