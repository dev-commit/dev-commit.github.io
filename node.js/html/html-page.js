
const getMenuHTML = () => (`
    <slot v-for="itemTitle in themesContent">
        <h4 v-html="themesEmoji+' '+itemTitle.title" :class="{ accent: itemTitle.accent }"></h4>
        <ul>
            <slot v-for="(itemTheme, i) in itemTitle.themes">
                <li v-if="itemTheme[0]">
                    <a
                        class="menu-link"
                        :id="itemTheme[0]+'link'"
                        :href="'#'+itemTheme[0]"
                        @click="buildContent(itemTheme[0])"
                        v-html="itemTheme[1]"
                    ></a>
                </li>
                <hr v-else />
            </slot>

        </ul>
    </slot>
`)

export const getIndexHTML = ({ up, title, script, menu, content }) => (`
    <!DOCTYPE html>
        <html>
        <head>
            <title>${title}</title>
            <meta charset="UTF-8">
            <link rel="icon" type="image/png" href="${up}src/img/favicon.svg">

            <script src="${up}src/js/utils.js"></script>
            <!-- Own JavaScript -->
            <script src="${up}@modules/build-${script}.js"></script>
        </head>
        <body>

            <div id="container">
                <div id="menu">
                    <div id="top">
                        <a href="#links" class="link">
                            <div class="img"></div>
                            <span v-html="'${title}'"></span>
                        </a>
                    </div>
                    ${menu ? menu : getMenuHTML()}
                </div>

                <div id="wrapper">
                    <div id="links">
                        <ul>
                            <slot v-for="itemLink in linksContent">
                                <li v-if="itemLink">
                                    <a :href="itemLink.page" :class="'theme-'+itemLink.theme" v-html="itemLink.title"></a>
                                </li>
                                <li v-else class="splitter"></li>
                            </slot>
                        </ul>
                    </div>
                    <div id="content">${content ? content : ''}</div>
                </div>
            </div>

            <!-- CSS -->
            <link rel="stylesheet" type="text/css" href="${up}src/css/basic.css">
            <link rel="stylesheet" type="text/css" href="${up}src/css/index.css">
            <link rel="stylesheet" type="text/css" href="${up}src/css/themes.css">

            <!-- Libraries -->
            <script src="${up}src/libs/highlight/highlight.pack.js"></script>
            <script src="${up}src/libs/vue.js"></script>

            <!-- Custom Elements -->
            <script src="${up}src/components-web/custom-elements.js"></script>
            <link rel="stylesheet" type="text/css" href="${up}src/components-web/custom-elements.css">

            <!-- Vue.js Components -->
            <script src="${up}src/components-vue/vue-components.js"></script>
            <link rel="stylesheet" type="text/css" href="${up}src/components-vue/vue-components.css">

            <!-- JavaScript -->
            <script src="${up}src/js/init.js"></script>
            <script src="${up}@modules/@links.js"></script>
            <script src="${up}src/vue/build.js"></script>
        </body>
    </html>
`)

// const a1 = getIndexHTML({
//     up: '',
//     title: 'Starter',
//     script: 'starter',
//     menu: null,
//     content: null,
// });

// const a2 = getIndexHTML({
//     up: '../',
//     title: 'Starter',
//     script: 'starter',
//     menu: '__menu-data__',
//     content: '__content_data__',
// });
