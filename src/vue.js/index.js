new Vue({
    el: '#container',
    data: {
        linksContent: ARR_LINKS,
        page: 'pages'
    },
    methods: {
        switchPage(page) {
            this.page = page;
        },
    }
});
