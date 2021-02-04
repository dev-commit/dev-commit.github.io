
function getMenu() {
    const splitter = '<div style="width: 100%; flex-shrink: 0"></div>';
    
    let html = '';
    
    ARR_THEMES.forEach(element => {
        if (element) {
            html += `<a href="/pages/${element.page}" class="menu ${element.class}">${element.title}</a>`
        } else {
            html += splitter
        }
    })

    return html;
}

if (!ARR_THEMES_SELECTED.length) {
    ARR_THEMES.forEach(element => {
        if (element) {
            getPage(element);
        }
    })
} else {
    const ARR_RESULT = [];
    const ARR_LOCAL = ARR_THEMES.filter(element => element);
    ARR_LOCAL.forEach(element => {
        ARR_THEMES_SELECTED.forEach(theme => {
            if (element.page.includes(theme)) {
                ARR_RESULT.push(element);
            }
        })
    })

    if (ARR_RESULT.length) {
        ARR_RESULT.forEach(element => {
            getPage(element);
        })
    }
}

function getPage(arrCurrent) {
    let wrapperMenu = '';
    let wrapperContent = '';

    arrCurrent.arr.forEach((item) => {

        if (isNaN(item[0])) {
            const elementMenu = `<a href="#${item[1]}-${item[2]}">${item[3]}</a>`
            const path = `../themes/${item[0]}/${item[1]}/${item[2]}.html`;

            $.ajax({
                type: "GET",
                url: path,
                async: false,
                success: function(data) {
                    wrapperContent += `<div id="${item[1]}-${item[2]}">${data}</div>`;
                }
            });

            wrapperMenu += elementMenu;
        }

        if (item[0] === 1) {
            wrapperMenu += `<div class="theme">${item[1]}</div>`;
        }

        if (item[0] === 2) {
            wrapperMenu += `<div class="section">${item[1]}</div>`;
        }
    });

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${arrCurrent.title}</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" type="image/png" href="../src/img/favicon.png">
            <link href="../src/preloader/preloader.css" rel="stylesheet" type="text/css">
        </head>
        <body>
            <div id="preloader"></div>

            <div id="container">
                <div id="menu-left">
                    <div id="menu-left-starter">
                        <div id="menu-left-show"></div>
                        <a href="#menu-top">Starter</a>
                    </div>
                    <div id="menu-build">${wrapperMenu}</div>
                </div>
                <div id="content-wrapper">
                    <div id="menu-top">${getMenu()}</div>
                    <div id="content">${wrapperContent}</div>
                </div>
            </div>
        
            <!-- OWN JAVASCRIPT !!! -->
            <script src="../src/libs/jquery.js"></script>
            <script src="../src/preloader/preloader.js"></script>
            <script src="../src-core/js/utils.js"></script>
            <script src="../src/js/main.js"></script>
        
            <!-- CSS -->
            <link rel="stylesheet" type="text/css" href="../src-core/css/basic.css">
            <link rel="stylesheet" type="text/css" href="../src/css/index.css">
        
            <!-- Libraries -->
            <script src="../src-core/libs/highlight/highlight.pack.js"></script>
            <script src="../src-core/libs/vue.js"></script>
        
            <!-- Custom Elements -->
            <script src="../src-core/components-web/custom-elements.js"></script>
            <link rel="stylesheet" type="text/css" href="../src-core/components-web/custom-elements.css">
        
            <!-- Vue.js Components -->
            <script src="../src-core/components-vue/vue-components.js"></script>
            <link rel="stylesheet" type="text/css" href="../src-core/components-vue/vue-components.css">
        
            <!-- JavaScript -->
            <script src="../src-core/js/init.js"></script>
        </body>
        </html>
    `;

    const blob = new Blob([html], {type: "text/html;charset=utf-8"});
    window.saveAs(blob, arrCurrent.page+'.html'); 
}
