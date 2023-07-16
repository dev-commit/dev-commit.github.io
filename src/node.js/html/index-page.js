export const getIndexPageHTML = (title) => (`
    <!DOCTYPE html>
    <html>
    <head>
        <title>${title}</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/png" href="custom/favicon.svg">
    </head>
    <body>

        <div id="container">
            <div id="wrapper">

                <div id="checkPages">
                    <button
                        class="button"
                        :class="{ active: page == 'pages' }"
                        @click="switchPage('pages')"
                    >
                        PAGE MODE
                    </button>
                    <button
                        class="button"
                        :class="{ active: page == 'build' }"
                        @click="switchPage('build')"
                    >
                        BUILD MODE
                    </button>
                </div>

                <div id="links">
                    <ul>
                        <slot v-for="itemLink in linksContent">
                            <li v-if="itemLink">
                                <a
                                    :href="page+'/'+itemLink.page"
                                    :class="'theme-'+itemLink.theme"
                                    v-html="itemLink.title"
                                ></a>
                            </li>
                            <li v-else class="splitter"></li>
                        </slot>
                    </ul>
                </div>
            </div>
        </div>

        <!-- CSS -->
        <link rel="stylesheet" type="text/css" href="src/css/starter.css">
        <link rel="stylesheet" type="text/css" href="src/css/custom.css">
        <link rel="stylesheet" type="text/css" href="src/css/layout.css">
        <link rel="stylesheet" type="text/css" href="src/css/index.css">

        <!-- Libraries -->
        <script src="src/libs/vue.js"></script>

        <!-- JavaScript -->
        <script src="@modules/@links.js"></script>
        <script src="src/vue.js/index.js"></script>
    </body>
    </html>
`);
