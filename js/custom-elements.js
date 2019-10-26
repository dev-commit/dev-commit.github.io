//---------------------------------------------------
// CUSTOM ELEMENTS
//---------------------------------------------------
let customElementRegistry = window.customElements;
let arrCustomElements = [
	'u-code-text',    'u-code-list',     'u-code-comment', 'u-code',
	'u-text-define',  'u-text-header',   'u-code-wrapper', 'u-link-wrapper',
	'u-code-npm',     'u-code-title',    'u-message-ok',   'u-message-info',
	'u-message-warn', 'u-message-error', 'u-code-accent',  'u-menu',
	'u-menu-accent',  'u-menu-code',     'u-menu-border',  'u-text-underline',
	'u-fr1',          'u-fr2',           'u-fr3',

	'bg-methods',     'bg-arguments', 'u-menu-unactive'
];

arrCustomElements.forEach(function(element) {
	customElementRegistry.define(element,
		class extends HTMLElement {
			constructor() {
				super();
			}
		}
	);
});