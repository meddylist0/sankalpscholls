(function ($) {
    "use strict";

    /*-----------------------------
        Header/Footer Load & Menu Stick
    ---------------------------------*/
    $(function () {
        $("#header").load('header.html', function () {
            var header = $('.header-logo-menu');
            $(window).scroll(function () {
                if ($(window).scrollTop() > 1) {
                    header.addClass('stick');
                } else {
                    header.removeClass('stick');
                }
            });
        });
        $("#footer").load('footer.html');
    });

    /*----------------------------
        Toogle Search
    ------------------------------ */
    // Handle click on toggle search button
    $('.header-search').on('click', function () {
        $('.search').toggleClass('open');
        $(this).find('i.fa-search').toggleClass('fa-close');
        return false;
    });

    // Handle click on search submit button
    $('#search-form input[type=submit]').on('click', function () {
        $('.search').toggleClass('open');
        return true;
    });

    // Clicking outside the search form closes it
    $(document).on('click', function (event) {
        var target = $(event.target);

        if (!target.is('.header-search') && !target.closest('.search').length) {
            $('.search').removeClass('open');
            $('#toggle-search').removeClass('fa-close');
        }
    });



    /*----------------------------
        Wow js active
    ------------------------------ */
    new WOW().init();

    /*----------------------------
        jQuery MeanMenu
    ------------------------------ */
    $('nav#dropdown').meanmenu();

    /*----------------------------
        Owl active
    ------------------------------ */
    $('.class-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        item: 3,
        smartSpeed: 2000,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });


    /*----------------------------
        Blog Carousel
    ------------------------------ */
    $('.blog-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        item: 3,
        smartSpeed: 2000,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });




    /*----------------------------
        Teacher Carousel
    ------------------------------ */
    $('.teacher-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        item: 3,
        smartSpeed: 2000,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    /*----------------------------
        Gallery Carousel
    ------------------------------ */
    $('.gallery-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3500,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 600,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });




    $('.testimonial-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        item: 2,
        smartSpeed: 2000,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });



    /*----------------------------
        Teacher Column Carousel
    ------------------------------ */
    $('.teachers-column-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        item: 2,
        smartSpeed: 2000,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });



    /*----------------------------
        Class Details Carousel
    ------------------------------ */
    $('.class-details-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        item: 1,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });








    /*--------------------------
        Countdown
    ---------------------------- */
    $('[data-countdown]').each(function () {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<div class="cdown days"><span class="counting">%-D</span>days</div><div class="cdown hours"><span class="counting">%-H</span>hrs</div><div class="cdown minutes"><span class="counting">%M</span>mins</div><div class="cdown seconds"><span class="counting">%S</span>secs</div>'));
        });
    });

    /*--------------------------
        ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*--------------------------
        Counter Up
    ---------------------------- */
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    });


    /*------------------------------------
        Testimonial Slick Carousel as Nav
    --------------------------------------*/
    $('.testimonial-image-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 420,
                settings: {
                    autoplay: true,
                    dots: false,
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });
    /*--------------------------------
        Testimonial Slick Carousel
    -----------------------------------*/
    $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.testimonial-image-slider'
    });
    /*--------------------------------
        Testimonial Small Carousel
    -----------------------------------*/
    $('.testimonial-small-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.testimonial-small-image-slider'
    });
    /*------------------------------------
        Testimonial Small Carousel as Nav
    --------------------------------------*/
    $('.testimonial-small-image-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.testimonial-small-text-slider',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 420,
                settings: {
                    autoplay: true,
                    dots: false,
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });

    /*--------------------------
        Mix It Up
    ---------------------------- */
    $('.filter-items').mixItUp();

    /*--------------------------
        Venubox
    ---------------------------- */
    $('.venobox').venobox({
        border: '10px',
        titleattr: 'data-title',
        numeratio: true,
        infinigall: true
    });


    $('.class-schedule .arrow a').on('click', function (e) {
        e.preventDefault();
        $(this).find('.fa').toggleClass('fa-angle-right fa-angle-left');
        $(this).parents('.class-schedule').find('.new-social-share').toggleClass('open');
    })


    /*-------------------------------------------
        Premium Mobile Menu Logic
    ---------------------------------------------*/
    $(document).on('click', '#mobile-toggle-btn', function () {
        $('#premium-mobile-menu').addClass('open');
        if ($('.menu-overlay').length === 0) {
            $('body').append('<div class="menu-overlay"></div>');
        }
        $('body').addClass('no-scroll');
        setTimeout(function () {
            $('.menu-overlay').addClass('active');
        }, 10);
    });

    $(document).on('click', '#close-mobile-menu, .menu-overlay', function () {
        $('#premium-mobile-menu').removeClass('open');
        $('.menu-overlay').removeClass('active');
        $('body').removeClass('no-scroll');
        setTimeout(function () {
            $('.menu-overlay').remove();
        }, 400);
    });

    $(document).on('click', '.submenu-toggle', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $parentLi = $this.parent('li');
        var $submenu = $this.siblings('.mobile-submenu');

        if ($submenu.hasClass('showing')) {
            $submenu.slideUp(400, function () {
                $(this).removeClass('showing');
            });
            $this.removeClass('active').text('+');
        } else {
            // Optional: Close other submenus at the same level for a cleaner accordion feel
            $parentLi.siblings('li').find('.mobile-submenu.showing').slideUp(400, function () {
                $(this).removeClass('showing');
            });
            $parentLi.siblings('li').find('.submenu-toggle').removeClass('active').text('+');

            $submenu.addClass('showing').hide().slideDown(400);
            $this.addClass('active').text('-');
        }
    });

    // Close menu when a link inside it is clicked (specifically for same-page links or UX)
    $(document).on('click', '.mobile-nav li a:not(.has-children > a)', function () {
        if ($(this).attr('href') !== '#' && !$(this).siblings('.submenu-toggle').length) {
            $('#close-mobile-menu').trigger('click');
        }
    });

})(jQuery);



(function () {
    $(function () {
        var toggle;
        return toggle = new Toggle('.toggle');
    });

    this.Toggle = (function () {
        Toggle.prototype.el = null;

        Toggle.prototype.tabs = null;

        Toggle.prototype.panels = null;

        function Toggle(toggleClass) {
            this.el = $(toggleClass);
            this.tabs = this.el.find(".tab");
            this.panels = this.el.find(".panel");
            this.bind();
        }

        Toggle.prototype.show = function (index) {
            var activePanel, activeTab;
            this.tabs.removeClass('active');
            activeTab = this.tabs.get(index);
            $(activeTab).addClass('active');
            this.panels.hide();
            activePanel = this.panels.get(index);
            return $(activePanel).show();
        };

        Toggle.prototype.bind = function () {
            var _this = this;
            return this.tabs.unbind('click').bind('click', function (e) {
                return _this.show($(e.currentTarget).index());
            });
        };

        return Toggle;

    })();

}).call(this);


$(function () {
    "use strict";

    $(".popup img").click(function () {
        var $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show img").attr("src", $src);
    });

    $("span, .overlay").click(function () {
        $(".show").fadeOut();
    });

});

