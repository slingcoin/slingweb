




/*
     FILE ARCHIVED ON 19:20:05 May 26, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 2:42:21 Nov 10, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
(function($) {
    $(document).ready(function() {

        // Global Variables
        window_w = $(window).width();
        window_h = $(window).height();
        window_s = $(window).scrollTop();
        mobilenav_screen_size = 820;

        $html = $('html');
        $body = $('body');

        if (history.pushState)
            var ionic_current_path = location.pathname;

        // Window Load and Resize
        $(window).bind('resize load', function() {

            window_w = $(window).width();
            window_h = $(window).height();
            window_s = $(window).scrollTop();

        });

        // Window Scroll
        $(window).scroll(function() {

            window_s = $(window).scrollTop();

        });

        // CSS3 transition support
        function supportsTransitions() {
            var b = document.body || document.documentElement,
                s = b.style,
                p = 'transition';

            if (typeof s[p] == 'string') {
                return true;
            }

            // Tests for vendor specific prop
            var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
            p = p.charAt(0).toUpperCase() + p.substr(1);

            for (var i = 0; i < v.length; i++) {
                if (typeof s[v[i] + p] == 'string') {
                    return true;
                }
            }

            return false;
        }

        /* Element Features */
        enableStickyHeader(); // Sticky Header
        enableHoverStickyHeader(); // Hover Sticky Header
        enableMobileNav(); // Mobile Navigation
        enableFlexSlider(); // Flexslider - Slider Plugin
        enableSearchBox(); // Search Box
        enableSearchPreBox(); // Search Box in Preheader
        enableCustomInput(); // Custom Made Inputs
        enableSliderAlternativeOverlay(); // Alternative Slider Overlay
        enableBackToTop(); // Back To Top Button
        enableNavigationButton(); // Navigation Button
        enableFullWidth(); // Full Width
        enableWOWAnimate(); // WOW Animate.css Plugin
        enableOnePageScroll(); // One Page Menu Items         


        // Reinitilize All Features Function
        function reinitializeAllFeatures() {
            enableStickyHeader(); // Sticky Header
            enableHoverStickyHeader(); // Hover Sticky Header
            enableMobileNav(); // Mobile Navigation
            enableFlexSlider(); // Flexslider - Slider Plugin
            enableSearchBox(); // Search Box
            enableSearchPreBox(); // Search Box in Preheader
            enableCustomInput(); // Custom Made Inputs
            enableSliderAlternativeOverlay(); // Alternative Slider Overlay
            enableBackToTop(); // Back To Top Button
            enableNavigationButton(); // Navigation Button
            enableFullWidth(); // Full Width
            enableWOWAnimate(); // WOW Animate.css Plugin
            enableOnePageScroll(); // One Page Menu Items         

            setTimeout(function() {
                enableWOWAnimate(); // WOW Animate.css Plugin
            }, 1200);


            setTimeout(function() {
                setFullWidth();
            }, 400);

        }


        // Prevent FOUC(flash of unstyled content)
        jQuery("html").addClass("no-fouc");
        $("html").show();

        /**
         *  Form Datepicker
         */
        function enableDatePicker() {

            $('.datepicker-button .datepicker-el').datepicker({
                onSelect: function() {

                    var datePicker = $(this);
                    var datePickerWrap = datePicker.parents('.date-picker');
                    var currentDate = datePicker.datepicker("getDate");

                    if (currentDate) {
                        var year = currentDate.getFullYear();
                        var month = currentDate.getMonth();
                        var day = currentDate.getDate();

                        datePickerWrap.find('.day').attr('value', day);
                        datePickerWrap.find('.month').attr('value', month);
                        datePickerWrap.find('.year').attr('value', year);

                        datePicker.fadeToggle(300);
                    }

                }
            });

            $('.datepicker-button .datepicker-icon').click(function() {
                $(this).parent().find('.datepicker-el').fadeToggle(300);
            });

        }




        /**
         *  Navigation Button
         */

        function enableNavigationButton() {

            // Initialize Navigaiton Button
            initNavigationButton();

            $(window).resize(function() {
                if (window_w < mobilenav_screen_size) {
                    $('.navigation-style2').removeClass('nav-active');
                }
            });

        }

        function initNavigationButton() {

            $('#nav-button').click(function() {
                $(this).parent().find('.navigation-style2').toggleClass('nav-active');
            });

        }



        /**
         *  Back To Top button
         */

        function enableBackToTop() {

            // Show/Hide Back To Top Button
            $(window).scroll(function() {
                var offset = $(document).height() - window_h - 300;
                if ($('#footer').length)
                    offset = $('#footer').offset().top - window_h;

                if (window_s > offset && window_w > 767) {
                    $('#back-to-top').fadeIn(400);
                } else {
                    $('#back-to-top').fadeOut(400);
                }
            });

            // Back To Top
            $('#back-to-top a').click(function(e) {
                e.preventDefault();

                // Duration
                var duration = 1200;
                if (window_s < 400)
                    duration = 600;
                if (window_s = 0)
                    duration = 0;

                $('html, body').animate({
                    scrollTop: 0 + 'px'
                }, {
                    duration: duration,
                    easing: 'easeInOutCubic'
                });
            });

        }




        /**
         *  Sticky Header
         */
        function enableStickyHeader() {

            $(window).scroll(function() {

                window_s = $(this).scrollTop();
                window_w = $(this).width();

                if (window_s > 130 && window_w > 991) {

                    // Prevent Header Top Animation Flash Effect
                    if ($('body').hasClass('headerstyle9') && !$('body').hasClass('sticky-header-on')) {
                        $('#header').hide();
                        setTimeout(function() {
                            $('#header').show();
                        }, 300);
                    }

                    $('#header').addClass('sticky-header');
                    $('body').addClass('sticky-header-on');

                } else {

                    $('#header').removeClass('sticky-header');
                    $('body').removeClass('sticky-header-on');

                }

            });

            // Initialize Body Padding for Header
            initMarineHeader();
            $(window).bind('load resize', function() {
                initMarineHeader();
            });

        }


        function initMarineHeader() {
            if (window_w > parseInt(mobilenav_screen_size) && !$body.hasClass('headerstyle7') && !$body.hasClass('headerstyle8')) {

                var $header = $('#header'),
                    header_h;

                if (!$header.hasClass('sticky-header')) {
                    header_h = $header.height();
                    $body.css('padding-top', header_h);
                } else {
                    $header.removeClass('sticky-header');
                    header_h = $header.height();
                    $body.css('padding-top', header_h);
                    $header.addClass('sticky-header');
                }

            } else {
                $body.css('padding-top', '');
            }
        }



        /**
         *  Hover Sticky Header
         */
        function enableHoverStickyHeader() {

            var header_hover = false;
            var button_hover = false;

            $('#header').hover(function() {
                header_hover = true;
            }, function() {
                header_hover = false;
                setTimeout(function() {
                    if (!button_hover && !header_hover)
                        $('#header').removeClass('sticky-header-visible');
                }, 600);
            });

            $('#sticky-header-hover-button .button-content').hover(function() {
                button_hover = true;
                $('#header').addClass('sticky-header-visible');
                setTimeout(function() {
                    if (!header_hover) {
                        $('#header').removeClass('sticky-header-visible');
                    }
                }, 1200);
            }, function() {
                button_hover = false;
            });

        }





        /* Sticky Footer */

        function enableStickyFooter() {

            // Initialize Sticky Footer
            initStickyFooter();
            $(window).bind('load resize', function() {
                if ($body.hasClass('sticky-footer-on'))
                    fixStickyFooter();
            });

        }

        // Init Sticky Footer
        function initStickyFooter() {
            $body.addClass('sticky-footer-on')
            if ($body.hasClass('sticky-footer-on')) {
                fixStickyFooter();
            }
        }

        // Fix Sticky Footer
        function fixStickyFooter() {
            var footer = $('#footer');
            if (footer.length) {
                var footer_h = $('#footer').height();
                $body.css('padding-bottom', footer_h);
            }
        }




        /* Search Box */
        function enableSearchBox() {

            initSearchBox();

            $(document).click(function(e) {
                if (!$('#search-box, #search-box *').is(e.target)) {
                    $('#search-box').removeClass('search-box-opened');
                }
            });

        };

        function initSearchBox() {
            $('#search-box>.icons').click(function() {
                $(this).parent().toggleClass('search-box-opened');
            });
        }

        /* Search Box Preheader */
        function enableSearchPreBox() {

            initSearchBoxPre();

            $(document).click(function(e) {
                if (!$('#search-box-pre, #search-box-pre *').is(e.target)) {
                    $('#search-box-pre').removeClass('search-box-opened');
                }
            });

        };

        function initSearchBoxPre() {
            $('#search-box-pre>.icons').click(function() {
                $(this).parent().toggleClass('search-box-opened');
            });
        }


        // WOW Animate.css Plugin
        function enableWOWAnimate() {

            var isMobileBrowser = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);

            // WOW animate.css if transitions are supported
            if (supportsTransitions() && !isMobileBrowser) {
                var off = window_h / 5;

                var wow = new WOW({
                    offset: off
                });

                wow.init();
            }

        }

        function createCookie(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            } else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=/";
        }

        function eraseCookie(name) {
            createCookie(name, "", -1);
        }


        /* Custom Made Inputs */
        function enableCustomInput() {
            /* Numeric Input */

            if ($('.shopping-cart').length > 0) {

                $('input[type="number"]').each(function() {
                    $(this).wrap('<div class="numeric-input-holder"></div>');


                    $(this).parent().prepend('<div class="decrease-button"></div>');
                    $(this).parent().append('<div class="increase-button"></div>');
                    // Decrease Button
                    $(this).parent().find('.decrease-button').click(function() {
                        var value = parseInt($(this).parent().find('input[type="number"]').val());
                        value--;
                        $(this).parent().find('input[type="number"]').val(value);
                    });
                    // Increase Button
                    $(this).parent().find('.increase-button').click(function() {
                        var value = parseInt($(this).parent().find('input[type="number"]').val());
                        value++;
                        $(this).parent().find('input[type="number"]').val(value);
                    });
                    // Prevent Not A Number(NaN) Value
                    $(this).keypress(function(e) {
                        var value = parseInt(String.fromCharCode(e.which));
                        if (isNaN(value)) {
                            e.preventDefault();
                        }
                    });
                })
            }
        }

        /* FlexSlider */
        function enableFlexSlider() {

            /* FullScreen Slider */
            $('.main-flexslider').flexslider({
                animation: "slide",
                controlNav: false,
                prevText: "",
                nextText: ""
            });

            /* Shop Product Slider */
            $('.shop-product-slider').flexslider({
                animation: "slide",
                controlNav: "thumbnails",
                prevText: "",
                nextText: "",
                smoothHeight: true
            });

            /* Portfolio Slider */
            $('.portfolio-flexslider').flexslider({
                animation: "slide",
                controlNav: false,
                prevText: "",
                nextText: ""
            });

            /* Post Gallery Slider */
            $('.post-image-gallery:not(".slider-enabled")').flexslider({
                animation: "slide",
                controlNav: false,
                prevText: "",
                nextText: ""
            });

            /* Chefs Slider */
            $('.chefs-slider').flexslider({
                animation: "fade",
                animationSpeed: 0,
                slideshow: false,
                controlNav: false,
                prevText: "",
                nextText: ""
            });

            /* Food Menu Slider */
            $('.food-menu-slider').flexslider({
                animation: "slide",
                animationSpeed: 0,
                smoothHeight: true,
                controlNav: false,
                slideshow: false,
                prevText: "",
                nextText: ""
            });

            /* Motors Slider */
            $('.motors-slider').flexslider({
                animation: "slide",
                animationSpeed: 600,
                smoothHeight: true,
                controlNav: true,
                slideshow: false
            });


            /* Food Menu Full Slider */
            $('.food-menu-full').each(function() {

                var slider = $(this).find('.food-menu-full-slider'),
                    nav = $(this).find('.food-menu-nav .food-menu-nav-item');

                slider.flexslider({
                    animation: "slide",
                    animationSpeed: 0,
                    smoothHeight: true,
                    controlNav: true,
                    slideshow: false,
                    prevText: "",
                    nextText: "",
                    manualControls: nav
                });

            });

            /* Tweets Slider */
            $(window).on('load', function() {
                $('.tweets-flexslider').flexslider({
                    animation: "slide",
                    controlNav: false,
                    directionNav: false,
                    touch: true,
                    slideshowSpeed: 3000,
                    animationSpeed: 400,
                    prevText: "",
                    nextText: "",
                    start: function(slider) {

                        slider.find('.arrow-left').click(function() {
                            slider.flexAnimate(slider.getTarget("prev"));
                        });

                        slider.find('.arrow-right').click(function() {
                            slider.flexAnimate(slider.getTarget("next"));
                        });

                    }
                });
            });

            /* Product Slider with Carousel Nav */
            $('.products-carousel').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 70,
                itemMargin: 6,
                asNavFor: '.products-slider',
                start: function(slider) {

                    slider.find('.arrow-left').click(function() {
                        slider.flexAnimate(slider.getTarget("prev"));
                    });

                    slider.find('.arrow-right').click(function() {
                        slider.flexAnimate(slider.getTarget("next"));
                    });

                }
            });

            $('.products-slider').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: false,
                animationLoop: false,
                slideshow: false,
                sync: ".products-carousel"
            });

            $('.flexslider-thumbnail-gallery').flexslider({
                animation: "fade",
                animationSpeed: 300,
                controlNav: "thumbnails",
                directionNav: false,
                start: function(slider) {

                    var $slider = slider;

                    $('.slides li', $slider).not('.clone').each(function(index, value) {
                        var tooltip = $(this).data('tooltip');
                        $slider.find('.flex-control-nav li').eq(index)
                            .attr('title', tooltip)
                            .tooltip({
                                placement: 'top',
                                animation: false
                            });;
                    });

                    $slider.find('.flex-control-nav li').hover(function() {
                        $('img', this).trigger('click');
                    });

                }
            });


            $('.testimonial-slider').flexslider({
                animation: "slide",
                animationSpeed: 0,
                smoothHeight: true,
                controlNav: "bullets",
                slideshow: false,
                directionNav: false
            });

            $(window).load(function() {
                $(window).trigger('resize');
            });

        }

        function enableMobileNav() {

            // navigation
            if ($('#sidemenu').length == 0) {
                var navigation = $('#main-nav');
                if (!navigation.length) {
                    navigation = $('#header div.menu>ul');
                }
            } else {
                var navigation = $('#side-nav>ul');
            }

            // Mobile Menu Button
            initMenuFeatures();

            // On Resize
            $(window).resize(function() {
                if (window_w > parseInt(mobilenav_screen_size)) {
                    navigation.show().removeClass('nav-opened');
                } else {
                    navigation.hide().removeClass('nav-opened');
                }
            });



        }

        /* Mega Menu Position Fix */
        function initMenuFeatures() {

            // navigation
            if ($('#sidemenu').length == 0) {
                var navigation = $('#main-nav');
                if (!navigation.length) {
                    navigation = $('#header div.menu>ul');
                }
            } else {
                var navigation = $('#side-nav>ul');
            }

            var sidemenu = $('#sidemenu');
            if (sidemenu.length) {

                // Sidemenu Overlaping Elements
                var sidenav = sidemenu.find('#side-nav');

                // Sidemenu Dropdown
                sidenav.find('>ul li').hover(function() {
                    var li = $(this);
                    if (!li.parents('.mega-menu').length && window_w > parseInt(mobilenav_screen_size)) {
                        li.addClass('item-hovered');
                        li.find('>ul').slideDown(800, function() {
                            fixSidemenu('fade');
                        });
                    }
                }, function() {
                    var li = $(this);
                    if (!li.parents('.mega-menu').length) {
                        li.removeClass('item-hovered');
                        setTimeout(function() {
                            if (!li.hasClass('item-hovered') && window_w > parseInt(mobilenav_screen_size)) {
                                li.find('>ul').slideUp(800, function() {
                                    fixSidemenu('fade');
                                });
                            }
                        }, 1200);
                    }
                });

            }
        }

        // One Page Menu Item Scroll
        function enableOnePageScroll() {

            var navigation = $('#main-nav');
            if (!navigation.length) {
                navigation = $('#header div.menu>ul');
                if (!navigation.length) {
                    navigation = $('#side-nav');
                }
            }

            $("a[href*=#]", navigation).add('a[href*=#]', '#slider').click(function(e) {
                e.preventDefault();
                var target_hash = $(this).attr('href');
                var target = $(target_hash);
                if (target.length) {
                    var target_y = target.offset().top;
                    $('html, body').animate({
                        scrollTop: target_y + 'px'
                    }, {
                        duration: 1200,
                        easing: 'easeInOutCubic',
                        complete: function() {

                            if (history.pushState) {
                                history.pushState(null, null, target_hash);
                            } else {
                                location.hash = target_hash;
                            }

                        }
                    });
                } else if (target == '#') {
                    $('html, body').animate({
                        scrollTop: 0 + 'px'
                    }, {
                        duration: 1200,
                        easing: 'easeInOutCubic'
                    });
                }
            });

        }



        // Custom Audio Player
        function enableCustomAudio() {

            $(document).mouseup(function() {

                $('.audio-progress').attr('data-mousedown', '');
                $('.audio-volume').attr('data-mousedown', '');

            });

            initCustomAudio();

        }

        function initCustomAudio() {

            $('audio').each(function() {

                var audio = $(this)[0];
                audio.volume = 0.5;

                /* Setup Audio Player */
                $(this).wrap('<div class="audio-player"></div>');
                $(this).parent().append('<div class="audio-play-button"></div>');
                $(this).parent().append('<div class="audio-progress" data-mousedown=""><div class="audio-progress-bar"></div></div>');


                /* Playe/Pause button */
                $('.audio-play-button').click(function() {

                    if ($(this).hasClass('pause')) {
                        $(this).parent().find('audio')[0].pause();
                        $(this).removeClass('pause');
                    } else {
                        $(this).parent().find('audio')[0].play();
                        $(this).addClass('pause');
                    }

                });


                /* Progress update */
                $(this).bind('timeupdate', function() {

                    var track_length = $(this)[0].duration;
                    var secs = $(this)[0].currentTime;
                    var progress = (secs / track_length) * 100;

                    $(this).parent().find('.audio-progress-bar').css('width', progress + '%');

                    // Show play button again at the end
                    if (track_length == secs) {
                        $(this).parent().find('audio')[0].pause();
                        $(this).parent().find('.audio-play-button').removeClass('pause');
                    }

                });


                /* Progress click event */
                $('.audio-progress').click(function(e) {

                    var audio_x = $(this).offset().left;
                    var audio_w = $(this).width();
                    var mouse_x = e.pageX;

                    var progress = (mouse_x - audio_x) / audio_w * 100;

                    var track_length = $(this).parent().find('audio')[0].duration;
                    var update_time = track_length / (100 / progress);

                    $(this).parent().find('audio')[0].currentTime = update_time;

                });

                /* Progress drag event */

                $('.audio-progress').mousedown(function() {

                    $(this).attr('data-mousedown', 'true');

                });

                $('.audio-progress').mousemove(function(e) {

                    if ($(this).attr('data-mousedown') == 'true') {

                        var audio_x = $(this).offset().left;
                        var audio_w = $(this).width();
                        var mouse_x = e.pageX;

                        var progress = (mouse_x - audio_x) / audio_w * 100;

                        var track_length = $(this).parent().find('audio')[0].duration;
                        var update_time = track_length / (100 / progress);

                        $(this).parent().find('audio')[0].currentTime = update_time;

                    }

                });


                /* Volume */
                if ($(this).hasClass('volume-on')) {

                    $(this).parent().addClass('volume-on');
                    $(this).parent().append('<div class="audio-volume"><div class="audio-volume-bar"></div></div>');

                    /* Volume Click Event */
                    $('.audio-volume-bar').css('width', audio.volume * 100 + '%');
                    $('.audio-volume').click(function(e) {

                        var volume_x = $(this).offset().left;
                        var volume_w = $(this).width();
                        var mouse_x = e.pageX;

                        var new_volume = (mouse_x - volume_x) / volume_w;

                        $(this).find('.audio-volume-bar').css('width', new_volume * 100 + '%');
                        $(this).parent().find('audio')[0].volume = new_volume;

                    });


                    /* Volume Drag Event */

                    $('.audio-volume').mousedown(function() {

                        $(this).attr('data-mousedown', 'true');

                    });

                    $('.audio-volume').mousemove(function(e) {

                        if ($(this).attr('data-mousedown') == 'true') {

                            var volume_x = $(this).offset().left;
                            var volume_w = $(this).width();
                            var mouse_x = e.pageX;

                            var new_volume = (mouse_x - volume_x) / volume_w;

                            if (new_volume >= 0 && new_volume <= 1) {

                                $(this).find('.audio-volume-bar').css('width', new_volume * 100 + '%');
                                $(this).parent().find('audio')[0].volume = new_volume;

                            }

                        }

                    });

                }


            });

        }






        /**
         *   Slider Alternative Overlay
         */

        function enableSliderAlternativeOverlay() {
            sliderAlternativeOverlay();
            $(window).load(function() {
                sliderAlternativeOverlay();
            });
            $(window).resize(function() {
                sliderAlternativeOverlay();
            });
        }

        function sliderAlternativeOverlay() {
            $('.alternate-slider-bg').each(function() {

                if (window_w > 991) {
                    var el_h = $(this).innerHeight();
                    $(this).css('margin-top', -el_h + 'px');
                } else {
                    $(this).css('margin-top', 0);
                }

            });
        }




        /**
         *   Timeline Load More
         */

        function enableTimelineLoadMore() {

            $.each($('.timeline-row .masonry-container'), function() {
                currentMonth = $(this).find('.col-md-6').attr('data-month');
                currentYear = $(this).find('.col-md-6').attr('data-year');
            });

            $('#timeline-load-more').click(function(e) {
                $this = $(this);
                $this.html('Loading Posts...');
                $.ajax({
                    url: templateUrl + '/ajax/timeline.php',
                    type: 'GET',
                    data: 'offset=' + timelineOffsetNext + '&posts_per_page=' + timelinePerPage + '&month=' + currentMonth + '&year=' + currentYear,
                    success: function(data) {

                        if (data == 0) {
                            $('#timeline-load-more').hide();
                        } else {
                            $('.timeline-container-wrap').append(data);
                            $('.masonry-container .timeline-line').remove();

                            $('.masonry-container').append('<div class="timeline-line"></div>');

                            enableTimelineBlog();

                            $this.html('Load More<i class="icons icon-spinner"> </i>');
                        }

                        timelineOffsetNext += timelinePerPage;
                        var $container = $('.masonry-container').masonry({
                            itemSelector: '.masonry-box'
                        });
                        $container.masonry('reload');

                        // Masonry Reload Fix (Animation Delay)
                        masonryFix = setTimeout(function() {
                            $container.masonry('reload');
                        }, 500);

                        $container.on('layoutComplete', function() {
                            return true;
                        });
                    }
                })
                e.preventDefault();
            });

        }


        /**
         * Woocommerce load More Button
         */

        function enableWooCommerceLoadMore() {

            var newWCElements = {};
            var $new_wc_items = '';
            newWCElements.loadElem = function($url) {

                $.ajax({
                    type: 'GET',
                    async: false,
                    url: $url,
                    success: function(data, textStatus, XMLHttpRequest) {
                        $new_wc_items = $(data).find('#sortable-shop-products').html();
                        $next = $(data).find('#wc-load-more').attr('href');
                        if ($next) {
                            $('#wc-load-more').attr('href', $next);
                        } else {
                            $('#wc-load-more').slideUp();
                        }
                    },
                    error: function(MLHttpRequest, textStatus, errorThrown) {
                        alert(errorThrown);
                    }
                });
                return $new_wc_items;
            };

            $('#wc-load-more').click(function() {

                var $newEls = $(newWCElements.loadElem($(this).attr('href'))).hide();
                $('#sortable-shop-products').append($newEls);
                $('#sortable-shop-products').find('.product').slideDown();
                return false;
            });

            $('#checkout-submit').click(function(e) {
                e.preventDefault();
                $('#cart-form').submit();
            });

            $('.sc-open-video').click(function(e) {
                e.preventDefault();
                $popup = $(this).closest('.sc-videp-popup-wrapper').find('.sc-video-popup');

                var $autoplay = '';

                if ($popup.data('autoplay') && $popup.data('autoplay') == 'yes') {

                    if ($popup.data('url').indexOf('?') == -1) {
                        $autoplay += '?';
                    } else if ($popup.data('url').indexOf('&amp;') == -1) {
                        $autoplay += '&amp;';
                    } else {
                        $autoplay += '&';
                    }
                    $autoplay += 'autoplay=1';
                }

                console.dir($popup.data('autoplay'));
                console.dir($popup.data('url') + $autoplay);

                $popup.prepend('<iframe src="' + $popup.data('url') + $autoplay + '"></iframe>');
                $popup.fadeIn(400);
            });

            $('.sc-close-video').click(function(e) {
                e.preventDefault();
                $(this).closest('.sc-video-popup').find('iframe').remove();
                $(this).closest('.sc-video-popup').fadeOut(400);
            });

        }



        /**
         * Woocommerce add to cart notification  
         */

        function enableWooCommerceAddToCart() {

            var addi = {};

            if (!$('#added_items').length)
                $('body').append('<div id="added_items"></div>')

            function if_added(item) {
                if (item.hasClass('added')) {
                    var product_id = item.attr('data-product_id');
                    clearInterval(addi[product_id]);
                    item.find('.loader-container').remove();
                    $('#added_items').prepend('<div id="' + product_id + '" class="added_item"><img src="' + item.parents('.product').find('.attachment-shop_catalog').attr('src') + '" alt=""/><p><b>"' + item.parents('.product').find('.product-title').html() + '"</b> was added to the cart. </p><div class="clear"></div></div>');
                    $('#' + product_id).animate({
                        opacity: 1
                    }, 500);
                    setTimeout(function() {
                        $('#' + product_id).animate({
                            opacity: 0,
                            marginTop: 20
                        }, 500, function() {
                            $(this).remove()
                        });
                    }, 5000)
                }
            }

            $('.add_to_cart_button').each(function() {
                var add_btn = $(this);
                $(this).click(function() {
                    addi[$(this).attr('data-product_id')] = setInterval(function() {
                        if_added(add_btn)
                    }, 1000);
                    add_btn.append('<span class="loader-container"><span id="fountainG"><span id="fountainG_1" class="fountainG"></span><span id="fountainG_2" class="fountainG"></span><span id="fountainG_3" class="fountainG"></span><span id="fountainG_4" class="fountainG"></span><span id="fountainG_5" class="fountainG"></span><span id="fountainG_6" class="fountainG"></span><span id="fountainG_7" class="fountainG"></span><span id="fountainG_8" class="fountainG"></span></span></span>');
                });
            });

        }




        /**
         *  Masonry, Portfolio Load More Button
         */

        function enableLoadMoreButton() {

            $('#load-more').click(function(event) {

                event.preventDefault();

                // Variables
                $url = $(this).attr('href');

                // Load Button Loading Text
                $load_more_text = $(this).html();
                $(this).html($(this).data('loading'));

                $.ajax({
                    type: 'GET',
                    url: $url,
                    success: function(data, textStatus, XMLHttpRequest) {

                        // Store New Data
                        var $new_items = $(data).find('#post-items').html();
                        var $next = $(data).find('#load-more').attr('href');

                        // update Load More Button Href
                        if ($next) {
                            $('#load-more').attr('href', $next);
                        } else {
                            $('#load-more').slideUp();
                        }

                        // Append new posts
                        $('#post-items').append($new_items);
                        $(".format-video").fitVids();
                        $(".project-item").show();

                        $('.post-image-gallery:not(".slider-enabled")').flexslider({
                            animation: "slide",
                            controlNav: false,
                            prevText: "",
                            nextText: "",
                        });

                        if ($('.masonry-container').length > 0) {
                            $('.masonry-container').masonry('reload');
                            setTimeout(function() {
                                $('.masonry-container').masonry('reload');
                            }, 400);
                        }

                    },
                    complete: function() {
                        $('#load-more').html($load_more_text);
                    },
                    error: function(MLHttpRequest, textStatus, errorThrown) {
                        alert(errorThrown);
                    }
                });


            });

        }



        /**
         *  Post Like Option
         */

        function enablePostLike() {

            $('.project-like').click(function() {

                $post_id = $(this).attr('data-post');

                //end if clicked or cookie exists
                if ($('.post-liked', this).length > 0 || document.cookie.indexOf('saved_post_like_' + $post_id) != -1) {
                    return;
                }

                $('.like-count', this).animate({
                    opacity: 0
                }, 200, function() {
                    $(this).html(parseInt($(this).html()) + 1);
                    $(this).animate({
                        opacity: 1
                    }, 200);
                });

                $(this).addClass('post-liked');

                $current_post_like = $('.like-count', this);

                $.ajax({
                    type: 'GET',
                    url: ajaxurl,
                    data: {
                        action: 'save_post_like',
                        post_id: $post_id
                    },
                    success: function(data, textStatus, XMLHttpRequest) {
                        $($current_post_like).html(data);
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert(errorThrown);
                    }
                });
            });

        }




        /**
         *  Set Full Width
         */
        function enableFullWidth() {

            setFullWidth();

            // Set Full Width on Resize & Load
            $(window).bind("resize", function() {

                setFullWidth();
                setTimeout(function() {
                    setFullWidth();
                }, 400);

            });

        }

        // Set Full Width Function
        function setFullWidth() {

            if (!$("body").hasClass("b960") && !$("body").hasClass("b1170")) {
                $(".full-width").each(function() {

                    var element = $(this);

                    // Reset Styles
                    element.css("margin-left", "");
                    element.css("padding-left", "0!important");
                    element.css("width", "");

                    var element_x = element.offset().left;

                    // Set New Styles
                    element.css("margin-left", -element_x + "px");
                    element.css("width", $(window).width() + "px");
                    element.css("padding-left", "");

                });
            }

        }

    });

})(jQuery);
