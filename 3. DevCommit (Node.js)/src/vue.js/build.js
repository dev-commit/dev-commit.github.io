const HIDDEN_MENU_STORE = 'HIDDEN_MENU_STORE';
const LOCALHOST = '127.0.0.1';
const MOBILE_WIDTH = 900;

let currentIsHideMenu = false;

new Vue({
    el: '#menu',
    data: {
        themesContent: null,
        themesEmoji: '🏷️ ',
        isHideMenu: null,
        isLocalhost: false,
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
            setLocalStorage(HIDDEN_MENU_STORE, this.isHideMenu);
        }
    },
    updated() {
        setHighlightCode();
    },
    mounted() {
        const store = getLocalStorage(HIDDEN_MENU_STORE);

        this.themesContent = ARR_MODULE;
        this.isHideMenu = store ? store : false;

        const url = window.location.href;

        if (url.indexOf(LOCALHOST) !== -1) {
            this.isLocalhost = true;
        }

        // window.addEventListener('resize', () => {
        //     if (document.body.clientWidth < MOBILE_WIDTH) {
        //         this.isHideMenu = true;
        //     } else {
        //         this.isHideMenu = getLocalStorage(HIDDEN_MENU_STORE);
        //     }
        // })
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
        pageName: '',
    },
    mounted() {
        this.linksContent = ARR_LINKS;
    },
    updated() {
        this.pageName = window.location.pathname.replace(/\/pages\//g, '');
    }
});
