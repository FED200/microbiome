$(document).ready(function () {
    function initBgCover(context) {
        if (!context) context = $('body');
        context.find('.bg-cover').each(function () {
            var holder = $(this);
            var image = holder.find('> img').hide();
            var imageSrc = image.prop('src');
            holder.css({
                backgroundImage: 'url(' + imageSrc + ')',
            });
        });
    }

    initBgCover();

    //sticky header
    function stickyHeader() {
        var height = jQuery(window).scrollTop();
        var header = jQuery(".site-header");

        if (height > 60) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    }

    jQuery(window).scroll(stickyHeader);
    stickyHeader();

    //Accordion
    $('[data-toggle-btn]').click(function () {
        $('[data-toggle-btn]').not(this).parent().removeClass('active');
        $(this).parent().toggleClass('active');
        $('[data-toggle-btn]').not(this).siblings('[data-toggle-block]').slideUp();
        $(this).siblings('[data-toggle-block]').slideToggle();
    });


    /* smooth scroll*/
    $('a.js-has-smooth[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    //banner-slider
    $('.banner-slider').slick({
        infinite: false,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
    });
    //   fancybox
    $('.fancybox').fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });

    //slider-col-4
    $('.slider-col-4').slick({
        infinite: false,
        slidesToShow: 4,
        adaptiveHeight: true,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    //slider-col-3
    $('.slider-col-3').slick({
        infinite: false,
        slidesToShow: 3,
        adaptiveHeight: true,
        slidesToScroll: 1,
        responsive: [            
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

});