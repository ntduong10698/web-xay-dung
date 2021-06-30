WebFontConfig = {
    google: {
        families: ['Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap']
    },
    timeout: 500
};

(function(d) {
    var wf = d.createElement('script'),
        s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    //wf.async = false;
    wf.defer = true;
    s.parentNode.insertBefore(wf, s);
})(document);

(function($) {
    'use strict';

    $(document).ready(function() {
        $(document).on('click touchstart', '.navbar-mobile-icon', function() {
            $(this).toggleClass('mobile-active');
            $('.navbar-mobile-wrap').toggleClass('menu-mobile-active');
            $('body').toggleClass('no-scroll');
        });

        $(document).on('mouseup touchstart', function(e) {
            var container;

            if (!$(e.target).hasClass('navbar-mobile-icon') && !$(e.target).parent().hasClass('navbar-mobile-icon')) {
                container = $('.navbar-mobile-wrap');

                if (!container.is(e.target) && container.has(e.target).length === 0 && container.is(':visible')) {
                    container.removeClass('menu-mobile-active');
                    $('.navbar-mobile-icon').removeClass('mobile-active');
                    $('body').removeClass('no-scroll');
                }
            }
        });
    });
})(jQuery);