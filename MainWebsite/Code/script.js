$(window).scroll(function() {
	if ($(this).scrollTop() > 200) {
		$('.fixelement').css({
			'display': 'none'
		});
	}
});
