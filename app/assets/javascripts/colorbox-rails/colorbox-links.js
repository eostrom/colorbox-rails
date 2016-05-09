// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
    $('a[data-colorbox="live"]').live('click', function(e) {
        e.preventDefault();
        $link = $(this);
        $.colorbox(
            { 
                height: $link.data("colorbox-height") || false,
                width: $link.data("colorbox-width") || false,
                iframe: $link.data("colorbox-iframe") || false,
                href: $link.attr('href'),
                opacity: 0.5
            });
    });

    $('a[data-colorbox="true"]').each(function() {
        $link = $(this);
        $link.colorbox(
            { 
                height: $link.data("colorbox-height") || false,
                width: $link.data("colorbox-width") || false,
                iframe: $link.data("colorbox-iframe") || false,
                href: $link.attr('href'),
                opacity: 0.5
            });
    });
    
});
