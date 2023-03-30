
emoji = {
    theory:    '📑 ',
    code:      '🧲 ',
    panda:     '🐼 ',
    cookie:    '🍪 ',
    donut:     '🍩 ',
    pizza:     '🍕 ',
    boom:      '💥 ',
    fire:      '🔥 ',
    baseball:  '⚾️ ',
    lemon:     '🍋 ',
    avocado:   '🥑 ',
    coconut:   '🥥 ',
    star:      '⭐️ ',
    chevron:   '🔰 ',
    icecream:  '🍦 ',
    unicorn:   '🦄 ',
    penguin:   '🐧 ',
}

// getLink(root, 'info');
// getLink(root, 'install');
// getLink(root, 'sample');

function getLink(root, item) {
    switch(item) {
        case 'info':    return [root+'main/info',         emoji.theory+'Информация'];
        case 'install': return [root+'main/install',      emoji.code+'Установка и настройка'];
        case 'sample':  return [root+'main/basic-sample', emoji.fire+'Базовый пример'];
    }
}

function setTheme(tag, arr) {
    let resultTag = '';

    switch(tag) {
        case 1: resultTag  = 'u-menu';          break;
        case 2: resultTag  = 'u-menu-border';   break;
        case 3: resultTag  = 'u-menu-accent';   break;
        case 4: resultTag  = 'u-menu-unactive'; break;
        case 5: resultTag  = 'u-menu-outline';  break;
        case 6: resultTag  = 'u-menu-gray';     break;
        case 7: resultTag  = 'u-block-alert';   break;
        default: resultTag = 'u-menu';
    }

    let result = arr.map(function(element) {
        return `<${resultTag}>`+element+`</${resultTag}>`
    });

    return result.join(' ');
}

var up = `<u-inline-border></u-inline-border>`;

function styleSubHeader(content) {
    const str = `🔵 <b style="color: #4707b7">${content}</b>`;
    return str;
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

    const currentLink = document.getElementById(file+'link');
    currentLink.classList.add('menu-link-active');
}

//----------------------------------------
// Clipboard
//----------------------------------------
function setClipboard() {
    const clipboardElements = document.querySelectorAll('u-clipboard');

    clipboardElements.forEach(element => {
        element.addEventListener('click', (e) => {
            copyToClipboard(e.target);
        })
    })
}

// Clear current selection
function clearClipboard() {
    window.getSelection().removeAllRanges();
}

function copyToClipboard(element) {
    let range = document.createRange();
    range.selectNode(element);

    clearClipboard();
    // To select text
    window.getSelection().addRange(range);
    document.execCommand('copy');
    clearClipboard();
}

//----------------------------------------
// localStorage
//----------------------------------------
function getLocalStorage(key) {
    const data = localStorage.getItem(key);

    if (data !== null) {
        return JSON.parse(data);
    }

    return '';
}

function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
