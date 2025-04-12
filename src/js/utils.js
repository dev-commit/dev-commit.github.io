
emoji = {
    fire:     '🔥 ',
    star:     '⭐️ ',
    theory:   '📑 ',
    settings: '⚙️ ',
    code:     '💎 ',
    libs:     '🎲 ',
    items:    '⚡️ ',
};

// getLink(root, 'info'),      // => main/info
// getLink(root, 'install'),   // => main/install'
// getLink(root, 'use'),       // => main/use
// getLink(root, 'variants'),  // => main/variants
// getLink(root, 'structure'), // => main/structure
// getLink(root, 'algoritm'),  // => main/algoritm

function getLink(root, item, updated = false) {
    function checkUp() {
        if (updated) {
            return 'done';
        }
        return false;
    }
    switch(item) {
        case 'info':      return [root+'main/info',      emoji.theory+'Информация', false, checkUp()];
        case 'install':   return [root+'main/install',   emoji.code+'Установка и настройка', false, checkUp()];
        case 'use':       return [root+'main/use',       emoji.fire+'Базовый пример', false, checkUp()];
        case 'variants':  return [root+'main/variants',  emoji.code+'Варианты', false, checkUp()];
        case 'structure': return [root+'main/structure', emoji.code+'Структура', false, checkUp()];
        case 'algoritm':  return [root+'main/algoritm',  emoji.star+'Алгоритм', false, checkUp()];
    }
};

function setTheme(tag, arr) {
    let resultTag = '';

    switch(tag) {
        case 1: resultTag  = 'u-menu';          break;
        case 2: resultTag  = 'u-menu-border';   break;
        case 3: resultTag  = 'u-menu-accent';   break;
        case 4: resultTag  = 'u-menu-unactive'; break;
        case 5: resultTag  = 'u-menu-outline';  break;
        case 6: resultTag  = 'u-menu-gray';     break;
        case 7: resultTag  = 'u-menu-error';    break;
        default: resultTag = 'u-menu';
    }

    let result = arr.map(function(element) {
        return `<${resultTag}>`+element+`</${resultTag}>`
    });

    return result.join(' ');
};

var up = `<u-inline-border></u-inline-border>`;

function setHighlightCode() {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
    });
};

function setActiveLink(file) {
    const links = document.querySelectorAll('.menu-link');

    links.forEach(element => {
        element.classList.remove('menu-link-active');
    });

    const currentLink = document.getElementById(file+'link');
    currentLink.classList.add('menu-link-active');
};

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
};

// Clear current selection
function clearClipboard() {
    window.getSelection().removeAllRanges();
};

function copyToClipboard(element) {
    let range = document.createRange();
    range.selectNode(element);

    clearClipboard();
    // To select text
    window.getSelection().addRange(range);
    document.execCommand('copy');
    clearClipboard();
};

//----------------------------------------
// localStorage
//----------------------------------------
function getLocalStorage(key) {
    const data = localStorage.getItem(key);

    if (data !== null) {
        return JSON.parse(data);
    }

    return '';
};

function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
};
