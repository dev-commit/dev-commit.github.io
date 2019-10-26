
var app = new Vue({
	el: '#content',
	data: {
		category: [
			['JavaScript',        arrJavaScript, 'menu-js'],
			['JavaScript Object',  arrJsObjects, 'menu-js'],
			['Canvas',            arrCanvas,     'menu-js'],
			['React.js',          arrReactjs,    'menu-fw'],
			['Vue.js',            arrVuejs,      'menu-fw'],

			['Git',               arrGit,        'menu-php'],
			['Flow',              arrFlow,       'menu-php'],
			['TypeScript',        arrTypescript, 'menu-php'],
			['Webpack',           arrWebpack,    'menu-php'],
			['NPM',               arrNpm,        'menu-php'],
			['Ramda',             arrRamda,      'menu-php', true],

			['Flexbox',           arrCssFlexbox, 'menu-html'],
			['CSS Grid',          arrCssGrid,    'menu-html'],
			['Bootstrap',         arrBootstrap,  'menu-html'],
			['HTML',              arrHTML,       'menu-html'],
			['CSS',               arrCSS,        'menu-html'],
			['SVG',               arrSvg,        'menu-html'],
			['Sass',              arrSass,       'menu-html', true],

			['Assessment',        arrAssessment, 'menu-fw'],
			['Задачи',            arrJsTasks,    'menu-fw'],
			['Теория',            arrTheory,     'menu-fw',],

			['jQuery',            arrJquery,     'menu-other'],
			['Other',             arrOther,      'menu-other'],
			['Linux',             arrLinux,      'menu-other',],

			['Node.js',           arrNodejs,     'menu-php'],
			['PHP',               arrPhp,        'menu-php'],
			['Python',            arrPython,     'menu-php'],
			['MySQL',             arrMySql,      'menu-php'],
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
