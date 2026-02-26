
const emoji = {
    theory:    '📑 ',
    code:      '⚡️ ',
    panda:     '🐼 ',
    cookie:    '🍪 ',
    donut:     '🍩 ',
    pizza:     '🍕 ',
    boom:      '💥 ',
    fire:      '🔥 ',
    cup:       '🥤 ',
    baseball:  '⚾️ ',
    lemon:     '🍋 ',
    avocado:   '🥑 ',
    favorite:  '⭐️ ',
}

function setTheme(tag, arr) {
    let resultTag = '';

    switch(tag) {
        case 1: resultTag = 'u-menu'; break;
        case 2: resultTag = 'u-menu-border'; break;
        case 3: resultTag = 'u-menu-accent'; break;
        case 3: resultTag = 'u-menu-accent'; break;
        case 4: resultTag = 'u-menu-unactive'; break;
    }

    let result = arr.map(function(element) {
        return `<${resultTag}>`+element+`</${resultTag}>`
    });

    return result.join(' ');
}

function setHighlightCode() {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
}

function setActiveLink(file) {
    const links = document.querySelectorAll('.menu-link');

    links.forEach(element => {
        element.classList.remove('menu-link-active');
    });

    const currentLink = document.getElementById(file);
    currentLink.classList.add('menu-link-active');
}
