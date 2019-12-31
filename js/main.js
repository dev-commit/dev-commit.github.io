
$('#menu-left > a').on('click', function() {
    $('#menu-left a').removeClass('active');
    $(this).addClass('active');
});

function localStorageService() {
    var value = localStorage.getItem('menu');
    if (value !== null) {
        if (value == 'true') {
            $('#menu-left').addClass('hide');
        } else {
            $('#menu-left').removeClass('hide');
        }
    }
}
localStorageService();

$('#menu-left-show').on('click', function() {
    $('#menu-left').toggleClass('hide');
    var isHide = $('#menu-left').hasClass('hide');
    localStorage.setItem('menu', isHide);
});



$(window).on('resize', function() {
    setLineScroll();
});

(function($) {
    $.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height();
    }
})(jQuery);

setLineScroll();
function setLineScroll() {
    var lineScroll = $('#menu-left').hasScrollBar()
    if (!lineScroll) {
        $('#menu-left').css('border-right', '8px solid rgba(0,0,0,0.1)');
    } else {
        $('#menu-left').css('border-right', 'none');
    }
}
