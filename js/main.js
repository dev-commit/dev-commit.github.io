
hljs.initHighlightingOnLoad();

var menu = 
    '<a href="/pages/assessment.html"  class="menu menu-other">Ассессмент</a>'+
    '<a href="/pages/js-tasks.html"    class="menu menu-other">Задачи</a>'+
    '<a href="/pages/theory.html"      class="menu menu-other">Теория</a>'+
    '<a href="/pages/testing.html"     class="menu menu-other">Тестирование</a>'+

    '<div style="width: 100%; flex-shrink: 0"></div>'+
    '<a href="/pages/js.html"                class="menu menu-js">JavaScript</a>'+
    '<a href="/pages/js-objects.html"        class="menu menu-js">Объекты</a>'+
    '<a href="/pages/js-function.html"       class="menu menu-js">Функции</a>'+
    '<a href="/pages/js-async.html"          class="menu menu-js">Асинхронность</a>'+
    '<a href="/pages/js-client-server.html"  class="menu menu-js">Клиент-сервер</a>'+
    '<a href="/pages/js-web-api.html"        class="menu menu-js">Web API</a>'+
    '<a href="/pages/js-web-components.html" class="menu menu-js">WebComponents</a>'+

    '<div style="width: 100%; flex-shrink: 0"></div>'+
    '<a href="/pages/react-js.html"       class="menu menu-fw">React.js</a>'+
    '<a href="/pages/redux.html"          class="menu menu-fw">Redux</a>'+
    '<a href="/pages/react-router.html"   class="menu menu-fw">React Router</a>'+
    '<a href="/pages/react-hooks.html"    class="menu menu-fw">React Hooks</a>'+

    '<div style="width: 100%; flex-shrink: 0"></div>'+
    '<a href="/pages/html.html"        class="menu menu-php">HTML</a>'+
    '<a href="/pages/css.html"         class="menu menu-php">CSS</a>'+
    '<a href="/pages/css-flexbox.html" class="menu menu-php">Flexbox</a>'+
    '<a href="/pages/css-grid.html"    class="menu menu-php">CSS Grid</a>'+
    '<a href="/pages/webpack.html"     class="menu menu-other">Webpack</a>'+
    '<a href="/pages/git.html"         class="menu menu-other">Git</a>'+

    // '<a href="/pages/material-ui.html"    class="menu menu-fw">Material-UI</a>'+
    // '<a href="/pages/svg.html"         class="menu menu-php">SVG</a>'+
    // '<a href="/pages/vue-js.html"      class="menu menu-js">vue.js</a>'+
    // '<a href="/pages/jquery.html"      class="menu menu-js">jquery</a>'+
    // '<a href="/pages/canvas.html"      class="menu menu-js">canvas</a>'+
    // '<a href="/pages/flow.html"        class="menu menu-other">flow</a>'+
    // '<a href="/pages/typescript.html"  class="menu menu-other">typescript</a>'+
    // '<a href="/pages/npm.html"         class="menu menu-other">npm</a>'+
    // '<a href="/pages/ramda.html"       class="menu menu-other">ramda</a>'+
    // '<a href="/pages/linux.html"       class="menu menu-other">linux</a>'+
    // '<a href="/pages/other.html"       class="menu menu-other">other</a>'+
    // '<a href="/pages/sass.html"        class="menu menu-html">sass</a>'+
    // '<a href="/pages/bootstrap.html"   class="menu menu-html">bootstrap</a>'+
    // '<a href="/pages/node-js.html"     class="menu menu-php">node.js</a>'+
    // '<a href="/pages/php.html"         class="menu menu-php">php</a>'+
    // '<a href="/pages/python.html"      class="menu menu-php">python</a>'+
    // '<a href="/pages/mysql.html"       class="menu menu-php">mysql</a>'+
    ''
;

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
