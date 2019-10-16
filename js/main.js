$(function ($) {
    "use strict";

    var $window = $(window);
    var html_body = $('html, body')

    /*======== Sticky header ===========*/
    $('.navbar-collapse a').on('click', function () {
        $(".navbar-collapse").collapse('hide');
    });

    //scrollspy menu
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 80
    });

    $('#mainHeader a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 30
                }, 300);
                return false;
            }
        }
    });


    //for scroll bottom to top js here
    if ($('.totop').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.totop').addClass('show');
                } else {
                    $('.totop').removeClass('show');
                }
            };

        backToTop();
        $window.on('scroll', function () {
            backToTop();
            if ($window.scrollTop()) {
                $("#mainHeader").addClass('stiky');
            } else {
                $("#mainHeader").removeClass('stiky');
            }
        });

        $('.totop').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }




        /*---------------------------------------------
            photo gallery masonay activation
        -----------------------------------------------*/
         var $Container = $('.photo-gallery-masony-inner');
         if ($Container.length > 0) {
             $Container.imagesLoaded(function() {
                 var festivarMasonry = $Container.isotope({
                    percentPosition: true,
                     masonry: {
                         columnWidth: 65,
                         gutter:30
                     }
                 });
                 $(document).on('click', '.photo-gallery-manu-wrppaer ul li', function() {
                     var filterValue = $(this).attr('data-filter');
                     festivarMasonry.isotope({
                         filter: filterValue
                     });
                 });
             });
         }
        /*---------------------------------------------
            photo gallery masonay filter
        -----------------------------------------------*/
         var portfolioMenu = '.photo-gallery-manu-wrppaer ul li';
         $(document).on('click', portfolioMenu, function() {
             $(this).siblings().removeClass('active');
             $(this).addClass('active');
         });



         $('.reviewSlider').slick({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
        
        





    jQuery(window).on('load', function () {

        /*---------------------------------------------------
            Site Preloader
        ----------------------------------------------------*/
        var $sitePreloaderSelector = $('.site-preloader');
        $sitePreloaderSelector.fadeOut(500);


    });

    // Skill Bar active js
    $(".cdev").circlos();

    //veno-box js
    $('.venobox').venobox(); 
    



}(jQuery));
