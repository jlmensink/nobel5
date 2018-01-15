/*
* NOBEL - A minimal portfolio template from Designova
* Author: Designova, http://www.designova.net
* Copyright (C) 2016 Designova. All rights reserved.
* This is a premium product. For licensing queries please contact hello@Designovadigital.com
*/

/*global $:false */
/*global window: false */


(function(){
  "use strict"; // Start of use strict


//Detecting viewpot dimension
	var vH = $(window).height();
	var vW = $(window).width();


//Adjusting Intro Components Spacing based on detected screen resolution
	$('.fullwidth').css('width',vW);
	$('.fullheight').css('height',vH);
    $('.quarterheight').css('height',vH-vH/6);
	$('.halfwidth').css('width',vW/2);
	$('.halfheight').css('height',vH/2);
    $('.menu-panel').css('height',vH);
    $('.mastwrap').css('margin-top',vH-vH/12);


//PRELOADER
        $('body, html').addClass('preloader-running');
        $('#mastwrap').css('visibility', 'hidden');
        $(window).load(function() {
            $("#status").fadeOut();
            $("#preloader").delay(1000).fadeOut(1000);
            $('body, html').removeClass('preloader-running');
            $('body, html').addClass('preloader-done');
            $("#mastwrap").delay(1000).css('visibility', 'visible');
});


//Featured Side Panel View
            $('.cd-btn').on('click', function(event) {
                event.preventDefault();
                $('.cd-panel').addClass('is-visible');
            });
            //close the lateral panel
            $('.cd-panel').on('click', function(event) {
                if ($(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close')) {
                    $('.cd-panel').removeClass('is-visible');
                    event.preventDefault();
                }
            });
             //close the lateral panel on featured-item link click
            $('a.menu-close-icon').on('click', function(event) {
                event.preventDefault();
                $('.cd-panel').removeClass('is-visible');
            });


//PARALLAX
            
            if (!device.tablet() && !device.mobile()) {

                //Activating Parallax effect if non-mobile device is detected
                $('.parallax, .parallax-layer').each(function() {
                    $(this).parallax("10%", -0.8);
                });


            } else {
                //Dectivate Parallax effect if mobile device is detected (bg image is displayed)
                $('.parallax, .parallax-layer').addClass('no-parallax');

            }


//Sub Menu Trigger
        $('nav ul > li').on('click', function(){
            $('nav ul > li').find('.sub-menu').stop().slideUp();
            $(this).find('.sub-menu').stop().slideDown();
        });

//ISOTOPE
        
        //ISOTOPE GLOBALS
        var $container1 = $('.works-container');
        var $container2 = $('.journal-container');


        //ISOTOPE INIT
        $(window).load(function() {
            $container1.isotope({
                // options
                itemSelector: '.works-item',
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });
            $container2.isotope({
                // options
                itemSelector: '.journal-item',
                layoutMode: 'masonry',
                transitionDuration: '0.8s'
            });
            //forcing a perfect masonry layout after initial load
            setTimeout(function() {
            $container1.isotope('layout');
            }, 100);
            // filtering
            $('.works-filter li a').on('click', function() {
                var selector = $(this).attr('data-filter');
                $('.works-filter li a').removeClass('active');
                $(this).addClass('active');
                $('html, body').animate({
                    scrollTop: $("#works-container").offset().top-120
                }, 1000, function(){
                    $('.works-container').isotope({
                        filter: selector
                    });
                    $('.filter-trigger').fadeIn(3000);
                });
                return false;
            });
        });

        //Isotope ReLayout on Window Resize event.
        $(window).on('resize', function() {
            $container1.isotope('layout');
            $container2.isotope('layout');
        });

        //Isotope ReLayout on device orientation changes
        window.addEventListener("orientationchange", function() {
            $container1.isotope('layout');
            $container2.isotope('layout');
        }, false);

        $('.filter-trigger').on('click', function() {
                $('html, body').animate({
                    scrollTop: $("body").offset().top
                }, 1000);
                return false;
            });


//VENOBOX
	$('.venobox, .image-lightbox-link').venobox({
    numeratio: true
    });   

//BX Slider
    $('.testimonial-slider').bxSlider({
      nextText: '',
      prevText: '',
      adaptiveHeight: true,
      pager: true,
      mode: 'vertical'
    });   



//Waypoints
    $('.mastwrap').waypoint(function(direction) {
        if(direction == 'down'){
            $('header.masthead').addClass('highlighted');
        }
        else{
            $('header.masthead').removeClass('highlighted');
        }
    }, { offset: '50%' });  


})();
//  Outer wrapper $(function ($)  : ends








  

