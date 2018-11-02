$(function(){

	$('a.page-scroll').on('click', function(event) {
        var element = $(this);
        var section = $(element.attr('href'));
        $('html, body').animate({
            scrollTop: section.offset().top
        }, 1000);
        event.preventDefault();
    });

});