$(function() {
	let heightHeader = $('.header').outerHeight(),
		heightSubHeader = $('.subheader').outerHeight(),
		heightNavigation = $('.navigation').outerHeight(),
		heightIntro = $('.intro').outerHeight(),
		heightFixedNav = heightHeader + heightSubHeader + heightNavigation,
		heightActive = heightHeader + heightSubHeader + heightNavigation + heightIntro,
		scroll = $(window).scrollTop();

	checkNavigation(scroll, heightFixedNav, heightActive);

	/* Slider */
	$('.intro__slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		easing: 'ease',
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1500,
		adaptiveHeight: true,
		responsive:[
			{
				breakpoint: 550,
				settings: {
					arrows: false,
				}
			}
		]
	});

	$('.product__slider').slick({
		arrow: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 700,
		responsive:[
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 551,
				settings: {
					slidesToShow: 1,
				}
			}
		],
	});

	/* Fixed Header */
	$(window).scroll(function(event) {
		event.preventDefault();

		heightHeader = $('.header').outerHeight(),
		heightSubHeader = $('.subheader').outerHeight(),
		heightNavigation = $('.navigation').outerHeight(),
		heightIntro = $('.intro').outerHeight(),
		heightFixedNav = heightHeader + heightSubHeader + heightNavigation,
		heightActive = heightHeader + heightSubHeader + heightNavigation + heightIntro;

		let scroll = $(window).scrollTop();

		checkNavigation(scroll, heightFixedNav, heightActive);
	});

	function checkNavigation(scroll, heightFixedNav, heightActive) {
		if ((scroll >= heightFixedNav) && (scroll < heightActive)) {
			$('.navigation').addClass('fixed');
			$('.navigation').removeClass('active');
		} else if (scroll >= heightActive) {
			$('.navigation').addClass('active');
		} else {
			$('.navigation').removeClass('fixed');
		}
	}

	/* Scroll */
	$('[data-scroll]').click(function(event) {
		event.preventDefault();

		let blockID = $(this).data('scroll'),
			blockOffset = $(blockID).offset().top;

			if (blockID !== '#home') {
				blockOffset = blockOffset - 100;
			}


		$('body,html').animate({
			scrollTop: blockOffset
		}, 700);
	});

	/*Nav-Bar*/
	$('.nav__burger').click(function(event) {
		$('.nav__burger,.nav').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.nav__item').click(function(event) {
		$('.nav__burger,.nav').removeClass('active');
		$('body').removeClass('lock');
	})
});