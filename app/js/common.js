$(function() {

    //scroll top-link transparent
    $(function() {
        var header = $("#top-line");
        $(window).scroll(function(scrlevt) {
            scrlevt.preventDefault();
            var scroll = $(window).scrollTop();

            if (scroll > 1) {
                header.addClass("header-scroll");
            } else {
                header.removeClass("header-scroll");
            }

            return false;
        });
    });

    // Page scroll to id
    $(".navi a, .btn").mPageScroll2id({
        offset: 0,
        duration: 900
    });


});
