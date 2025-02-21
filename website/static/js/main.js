/***************************************************
==================== JS INDEX ======================
****************************************************
01. WOW JS
02. Preeloader
 ****************************************************/

(function ($) {
	"use strict";

	////////////////////////////////////////////////////
	// 05. Wow Js
	new WOW().init();

	// scrollCue;
	// scrollCue.init();
	scrollCue.init({
	    duration : 500,
	    interval : -200,
	    percentage : 0.8
	});

	// Scroll Area
	$(document).ready(function(){
	    $('.scroll-area').click(function(){
	      	$('html').animate({
	        	'scrollTop' : 0,
	      	},700);
	      	return false;
	    });
	    $(window).on('scroll',function(){
	      	var a = $(window).scrollTop();
	      	if(a>400){
	            $('.scroll-area').slideDown(300);
	        }else{
	            $('.scroll-area').slideUp(200);
	        }
	    });
	});
	// Preeloader
	var $window = $(window); 
	$window.on('load', function(){
		$(".preloader").fadeOut(800);
	});

	// //////////////
	// Video Button Modal
	document.addEventListener("DOMContentLoaded", function() {
        const lightbox = GLightbox({
            selector: '.video-p-btn',
            autoplayVideos: true,
            openEffect: 'fade',
            closeEffect: 'fade',
            touchNavigation: false,
            closeOnOutsideClick: false
        });
    });

    // //////////////
	// Portfolio Modal
	document.addEventListener("DOMContentLoaded", function() {
        const lightbox = GLightbox({
            selector: '.image-popup',
            autoplayVideos: true,
            openEffect: 'fade',
            closeEffect: 'fade',
            touchNavigation: false
        });
    });

    var $CounterUp = $('.counter');
    if($CounterUp.length > 0){
		$('.counter').counterUp({
	        delay: 10,
	        time: 2000
	    });
	}

	// Hero Slider
	var $heroSlider = $('.ct-hero-slider-full');
	if($heroSlider.length > 0){
		var swiper = new Swiper('.ct-hero-slider-full', {
			slidesPerView: 1,
	        centeredSlides: false,
	        speed:500,
	        loop: true,
			autoplay: true,
			pagination: {
				el: ".hero-slider-dot",
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + '<button>'+(index + 1)+'</button>' + "</span>";
				},
			},
			navigation: {
				nextEl: ".hero-button-next",
				prevEl: ".hero-button-prev",
			},
			autoplay: {
				delay: 5000,
			},

		});
	}


	// Testimonial Slider
    var $TestimonialSlider = $('.top-slider-tes');
    if($TestimonialSlider.length > 0){
		var swiper = new Swiper('.top-slider-tes', {
	        slidesPerView: 'auto',
	        centeredSlides: false,
	        speed:2000,
			loop: true,
			autoplay: true,
			spaceBetween: 25,
			autoplay: {
				delay: 1000,
			},
			freeMode: true,
	    	freeModeMomentum: false,
	    });
	}

	// Client Slider
    var $lientSlider = $('.ct-client-logo-slider');
    if($lientSlider.length > 0){
		var swiper = new Swiper('.ct-client-logo-slider', {
	        slidesPerView: 'auto',
	        centeredSlides: false,
	        speed:500,
			loop: true,
			autoplay: true,
			spaceBetween: 25,
			autoplay: {
				delay: 3000,
			},
	    });
	}

	// Portfolio Slider
	var $PortfolioSlider = $('.portfolio-slider-full');
    if($PortfolioSlider.length > 0){
		var swiper = new Swiper('.portfolio-slider-full', {
	        slidesPerView: 4,
			spaceBetween: 15,
			loop: true,
			autoplay: true,
			pagination: {
				el: ".portfolio-slider-dot",
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + '<button>'+(index + 1)+'</button>' + "</span>";
				},
			},
			navigation: {
				nextEl: ".portfolio-button-next",
				prevEl: ".portfolio-button-prev",
			},
			breakpoints: {
				'1600': {
					slidesPerView: 4,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
	    });
	}

	// Portfolio
	var $portfolio = $('.p-projects-full');
	if ($portfolio.length > 0) {
	    if (!$portfolio.data('mixitup')) {
	        var mixer = mixitup('.p-projects-full');
	        $portfolio.data('mixitup', mixer);
	    }
	    var $portF = $('.portF');
	    if ($portF.length > 0 && !$portF.data('mixitup')) {
	        var mixerPortF = mixitup('.portF', {
	            selectors: {
	                target: '.portfolio-item-single'
	            },
	            animation: {
	                duration: 100
	            }
	        });
	        $portF.data('mixitup', mixerPortF);
	    }
	}


	
	// Sticky Menu
	$(document).ready(function(){
		$(window).on('scroll',function(){
			var scroll = $(window).scrollTop();
			if(scroll < 150){
				$('.sticky-header').removeClass('sticky');
			}else{
				$('.sticky-header').addClass('sticky');
			}
		});
	});

	
	// particles-js
	var $particalJS = $('#particles-js');
		if($particalJS.length > 0){
			particlesJS("particles-js", {
	        "particles": {
	            "number": {
	                "value": 160,
	                "density": {
	                    "enable": true,
	                    "value_area": 800
	                }
	            },
	            "color": { "value": "#ffffff" },
	            "shape": {
	                "type": "circle",
	                "stroke": { "width": 0, "color": "#000000" },
	                "polygon": { "nb_sides": 5 },
	                "image": { "src": "img/github.svg", "width": 100, "height": 100  }
	            },
	            "opacity": {
	                "value": 1, "random": true,
	                "anim": { "enable": true,  "speed": 1, "opacity_min": 0, "sync": false }
	            },
	            "size": {
	                "value": 3, "random": true,
	                "anim": { "enable": false, "speed": 4, "size_min": 0.3, "sync": false }
	            },
	            "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
	            "move": {
	                "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": {"enable": false,"rotateX": 600, "rotateY": 600 }
	            }
	        },
	        "interactivity": {
	            "detect_on": "canvas",
	            "events": { "onhover": {  "enable": true,  "mode": "bubble"  }, "onclick": {  "enable": true,  "mode": "repulse" }, "resize": true
	            },
	            "modes": {
	                "grab": { "distance": 400,  "line_linked": { "opacity": 1 } },
	                "bubble": {  "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 },
	                "repulse": { "distance": 400,  "duration": 0.4 },
	                "push": { "particles_nb": 4 },
	                "remove": { "particles_nb": 2 }
	            }
	        },
	        "retina_detect": true
	    });

	}

})(jQuery);