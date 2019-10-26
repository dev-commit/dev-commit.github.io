
hljs.initHighlightingOnLoad();

var menu = `
    <a href="/pages/js.html"          class="menu menu-js">js</a>
    <a href="/pages/js-objects.html"  class="menu menu-js">objects</a>
    <a href="/pages/js-tasks.html"    class="menu menu-js">tasks</a>
    <a href="/pages/react-js.html"    class="menu menu-js">react.js</a>
    <a href="/pages/vue-js.html"      class="menu menu-js">vue.js</a>
    <a href="/pages/jquery.html"      class="menu menu-js">jquery</a>
    <a href="/pages/canvas.html"      class="menu menu-js">canvas</a>
    
    <a href="/pages/flow.html"        class="menu menu-other">flow</a>
    <a href="/pages/typescript.html"  class="menu menu-other">typescript</a>
    <a href="/pages/webpack.html"     class="menu menu-other">webpack</a>
    <a href="/pages/npm.html"         class="menu menu-other">npm</a>
    <a href="/pages/git.html"         class="menu menu-other">git</a>
    <a href="/pages/ramda.html"       class="menu menu-other">ramda</a>
    <a href="/pages/linux.html"       class="menu menu-other">linux</a>
    <a href="/pages/theory.html"      class="menu menu-other">theory</a>
    <a href="/pages/other.html"       class="menu menu-other">other</a>
    <a href="/pages/assessment.html"  class="menu menu-other">assessment</a>

    <a href="/pages/html.html"        class="menu menu-html">html</a>
    <a href="/pages/css.html"         class="menu menu-html">css</a>
    <a href="/pages/sass.html"        class="menu menu-html">sass</a>
    <a href="/pages/bootstrap.html"   class="menu menu-html">bootstrap</a>
    
    <a href="/pages/svg.html"         class="menu menu-html">svg</a>
    <a href="/pages/css-flexbox.html" class="menu menu-html">flexbox</a>
    <a href="/pages/css-grid.html"    class="menu menu-html">css grid</a>

    <a href="/pages/node-js.html"     class="menu menu-php">node.js</a>
    <a href="/pages/php.html"         class="menu menu-php">php</a>
    <a href="/pages/python.html"      class="menu menu-php">python</a>
    <a href="/pages/mysql.html"       class="menu menu-php">mysql</a>
`;

$('#menu-top').html(menu);

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
