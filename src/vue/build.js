
new Vue({
    el: '#menu',
    data: {
        themesContent: null,
        themesEmoji: '🥥',
        isHideMenu: false,
    },
    methods: {
        buildContent(file) {
            const path = `/@themes/${file}.html`;

            fetch(path)
                .then(res => res.text())
                .then(body => {
                    const Component = Vue.extend({
                        template: `<div>${body}</div>`
                    });
                    const component = new Component().$mount();
                    const wrapper = document.getElementById('content');
                    wrapper.innerHTML = '';
                    wrapper.appendChild(component.$el);

                    setHighlightCode();
                    setActiveLink(file);
                    setClipboard();
                })
        },
        toggleMenu() {
            this.isHideMenu = !this.isHideMenu;
        }
    },
    updated() {
        setHighlightCode();
    },
    mounted() {
        this.themesContent = ARR_MODULE;
    },
    created() {
        if (location.href.indexOf('build') === -1) {
            const hashPage = location.hash.slice(1);
            hashPage && this.buildContent(hashPage);
        }
	},
});

new Vue({
    el: '#links',
    data: {
        linksContent: null,
    },
    mounted() {
        this.linksContent = ARR_LINKS;
    },
});
