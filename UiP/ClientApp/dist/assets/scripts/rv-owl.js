(function ($) {
    // USE STRICT
    "use strict";

    $(document).ready(function() {
        var owlSelector = $('.owl-carousel');
        owlSelector.each(function () {
            var navStatus = false;
            var dotStatus = true;
            var center = false;
            var loopStatus = true;
            var col_sm =  1;
            var col_md =  2;
            var col_lg =  3;
            var col_xs =  1;
            var items = 1;
            var animateOut = null;
            var animateIn = null;
            var marginSpace = 0;
            var autoplay = true;

            if ($(this).attr('data-carousel-autoplay') != null) {
                autoplay = $(this).data('carousel-autoplay');
            }
            if ($(this).attr('data-carousel-nav') == "true") {
                navStatus = true;
            }
            if ($(this).attr('data-carousel-loop') == "false") {
                loopStatus = false;
            }
            if ($(this).attr('data-carousel-dots') == "false") {
                dotStatus = false;
            }
            if ($(this).attr('data-carousel-margin') != null) {
                marginSpace = $(this).data('carousel-margin');
            }
            if ($(this).attr('data-carousel-out') != null) {
                animateOut = $(this).attr('data-carousel-out');
            }
            if ($(this).attr('data-carousel-in') != null) {
                animateIn = $(this).attr('data-carousel-in');
            }
            if ($(this).attr('data-carousel-center') == "true") {
                center = true;
            }
            if ($(this).attr('data-carousel-items') != null) {
                items = $(this).data('carousel-items');
            }
            col_sm =  items;col_md =  items;col_lg =  items;col_xs =  items;
            if ($(this).attr('data-carousel-xs') != null ||
                $(this).attr('data-carousel-sm') != null ||
                $(this).attr('data-carousel-lg') != null ||
                $(this).attr('data-carousel-md') != null) {

                col_sm = $(this).data('carousel-sm');
                col_md = $(this).data('carousel-md');
                col_lg = $(this).data('carousel-lg');
                col_xs = $(this).data('carousel-xs');
            }
            $(this).owlCarousel({
                nav: navStatus,
                navText : ["<i class='lnr lnr-chevron-left'></i>","<i class='lnr lnr-chevron-right'></i>"],
                autoplay: autoplay,
                loop: loopStatus,
                dots: dotStatus,
                animateOut: animateOut,
                animateIn: animateIn,
                margin: marginSpace,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: col_xs,
                        center:center
                    },
                    // breakpoint from 480 up
                    320: {
                        items: col_sm,
                        center:center
                    },
                    // breakpoint from 768 up
                    480: {
                        items: col_md,
                        center:center
                    },
                    992: {
                        items: col_lg,
                        center:center
                    },
                    1200: {
                        items : items,
                        center: center
                    }
                }
            });

            // Custom Navigation Events
            $(".rv-owl-next").on("click", function(){
                owlSelector.trigger('next.owl.carousel');
            });
            $(".rv-owl-prev").on("click", function(){
                owlSelector.trigger('prev.owl.carousel');
            })

        });
    });

})(jQuery);




