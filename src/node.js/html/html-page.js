
const PATH = 'C:/Users/Tony/Desktop/Repo/dev-commit.github.io';

const getMenuHTML = () => (`
    <slot v-for="itemTitle in themesContent">
        <h4
            v-html="(!itemTitle.child ? themesEmoji : '')+' '+itemTitle.title"
            :class="{
                accent: itemTitle.accent,
                selected: itemTitle.selected,
                child: itemTitle.child
            }"
        ></h4>
        <ul>
            <slot v-for="(itemTheme, i) in itemTitle.themes">
                <li
                    v-if="itemTheme[0]"
                    :class="{
                        child: itemTheme[2],
                        done: itemTheme[3] == 'done',
                        check: itemTheme[3] == 'check',
                    }"
                >
                    <a
                        class="menu-link"
                        :id="itemTheme[0]+'link'"
                        :href="'#'+itemTheme[0]"
                        @click="buildContent(itemTheme[0])"
                        v-html="itemTheme[1]"
                    ></a>
                    <a
                        v-if="isLocalhost"
                        class="menu-link-vscode"
                        :href="'vscode://file/'+'${PATH}'+'/@themes/'+itemTheme[0]+'.html'">
                    </a>
                </li>
                <hr v-else />
            </slot>

        </ul>
    </slot>
`);

export const getIndexHTML = ({ up, title, page, menu, content }) => (`
    <!DOCTYPE html>
        <html>
        <head>
            <title>${title}</title>
            <meta charset="UTF-8">
            <link rel="icon" type="image/png" href="${up}favicon.svg">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

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
                        <a href="#links" class="link" v-html="'${title}'"></a>
                    </div>
                    ${menu ? menu : getMenuHTML()}
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
        </body>
    </html>
`);
