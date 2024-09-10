import { renderPageMenu } from './renderPageMenu.js';

export const renderPage = ({ up, title, page, menu, content }) => (`
    <!DOCTYPE html>
        <html>
        <head>
            <title>${title}</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" type="image/png" href="${up}custom/favicon.svg">

            <script src="${up}src/js/utils.js"></script>
            <!-- Own JavaScript -->
            <script src="${up}@themes/${page}/build-${page}.js"></script>
        </head>
        <body>
            <div id="container">
                <div id="menu" :class="{ hide:isHideMenu }">
                    <div id="top">
                        <img
                            width="35px"
                            height="35px"
                            src="../src/img/show.svg"
                            class="img"
                            @click="toggleMenu()"
                        >
                        <a href="#links" class="top-link" v-html="'${title}'"></a>
                    </div>

                    <div class="search-wrapper">
                        <input class="search-input" id="search-input" type="text" autocomplete="off" placeholder="Search..." />
                        <div id="search-result"></div>
                    </div>

                    ${menu ? menu : renderPageMenu()}
                </div>

    
                <div id="wrapper">
                    <div id="links">
                        <ul>
                            <slot v-for="itemLink in linksContent">
                                <li v-if="itemLink">
                                    <a
                                        :href="itemLink.page"
                                        :class="{
                                            ['theme-'+itemLink.theme]: true,
                                            active: itemLink.page == pageName
                                        }"
                                        v-html="itemLink.title"
                                    ></a>
                                </li>
                                <li v-else class="splitter"></li>
                            </slot>
                        </ul>
                    </div>
                    <div id="content">${content ? content : ''}</div>
                </div>
            </div>

            <!-- CSS -->
            <link rel="stylesheet" type="text/css" href="${up}src/css/starter.css">
            <link rel="stylesheet" type="text/css" href="${up}src/css/custom.css">
            <link rel="stylesheet" type="text/css" href="${up}src/css/layout.css">

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
            <script src="${up}src/vue.js/build.js"></script>

            <!-- Search -->
            <script src="${up}search-data.js"></script>
            <script src="${up}src/js/search.js"></script>
        </body>
    </html>
`);
