jQuery(function($) {
    'use strict';

    // Flexy header
    flexy_header.init();

    // Sidr
    $('.slinky-menu')
        .find('ul, li, a')
        .removeClass();

    $('.sidr-toggle--right').sidr({
        name: 'sidr-main',
        side: 'right',
        renaming: false,
        body: '.layout__wrapper',
        source: '.sidr-source-provider'
    });

    // Slinky
    $('.sidr .slinky-menu').slinky({
        title: true,
        label: ''
    });

    // Enable / disable Bootstrap tooltips, based upon touch events
    if(Modernizr.touchevents) {
        $('[data-toggle="tooltip"]').tooltip('hide');
    }
    else {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // Prevent dropdown menu from being :hoverable
    $('.flexy-navigation__item--dropdown > a').on('click', function(event) {
       event.preventDefault();

       var $element = $(this),
           $parent = $element.parent();

       $parent.toggleClass('active');
    });

    $('body').click(function(event) {

        if ($(event.target).closest('.flexy-navigation__item--dropdown > a').length === 0) {
            $('.flexy-navigation__item--dropdown.active').removeClass('active');
        }
    });
});
