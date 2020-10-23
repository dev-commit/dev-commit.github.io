
var app = new Vue({
	el: '#content',
	data: {
		category: [
			['JavaScript',                arrJavaScript,      'menu-js'],
			['JavaScript: Объекты',       arrJsObjects,       'menu-js'],
			['JavaScript: Функции',       arrJsFunction,      'menu-js'],
			['JavaScript: Асинхронность', arrJsAsync,         'menu-js'],
			['JavaScript: Клиент-сервер', arrJsClientServer,  'menu-js'],
			['JavaScript: Web API',       arrJsWebApi,        'menu-js'],
			['JavaScript: WebComponents', arrJsWebComponents, 'menu-js'],
		],
		themesContent: null,
		pageContent: '',
		pageBuild: false,
		showContent: false,
		hoverHeaderMenu: '', // пункт HeaderMenu на который навели
		hoverThemesMenu: []  // пункт ThemesMenu на который навели
	},

	methods: {
		buildThemes(theme) {
			this.themesContent = theme;
		},
		buildContent(category, section, theme) {
			var path = 'themes/'+category+'/'+section+'/'+theme+'.html';
			$.ajax({
				type: "GET",
				url: path,
				async: false,
				success: function(data) {
					var MyComponent = Vue.extend({
						template: `
							<div>
								${data}
							</div>
						`
					});
					var component = new MyComponent().$mount();
					var wrapper = document.getElementById('question-content');
					wrapper.innerHTML = '';
					wrapper.appendChild(component.$el);

					app.pageBuild = true;
				}
			});

			this.showContent = true;
			this.checkHighlightCode();
		},
		closeContent() {
			this.pageBuild = false;
			this.showContent = false
		},
		checkHighlightCode() {
			document.querySelectorAll('pre code').forEach((block) => {
				hljs.highlightBlock(block);
			});
		},
        handleEscapeKey(e) {
        	// ESC
			if (event.keyCode == 27) {
				this.closeContent();
			}
			// W - HeaderMenu
			if (event.keyCode == 87) {
				this.buildThemes(this.hoverHeaderMenu);
			}
			// D - ThemesMenu
			if (event.keyCode == 68) {
				this.buildContent(this.hoverThemesMenu[0], this.hoverThemesMenu[1], this.hoverThemesMenu[2]);
			}
        }
	},
	updated() {
		this.checkHighlightCode();
	},
    mounted() {
        if (typeof document !== 'undefined') {
            document.body.addEventListener('keyup', this.handleEscapeKey);
        }
    },
    destroyed() {
        if (typeof document !== 'undefined') {
            document.body.removeEventListener('keyup', this.handleEscapeKey);
        }
    }
})