
const customElementRegistry = window.customElements;

const arrCustomElements = [
	// text
	'u-text-underline', 'u-text-header', 'u-text-define', 'u-text-accent',
	// menu
	'u-menu', 'u-menu-accent', 'u-menu-code', 'u-menu-border', 'u-menu-unactive',
	// code
	'u-code', 'u-code-npm', 'u-code-accent', 'u-code-text', 'u-code-flat', 'u-code-list',
	'u-code-comment', 'u-code-wrapper',
	// link
	'u-link-wrapper',
	// message
	'u-message-ok', 'u-message-info', 'u-message-warn', 'u-message-error',   
	// используется в "v-code" и с "u-code-wrapper"
	'u-code-title', 
	// blocks
	'u-block-left-padding', 'u-block-code',
	// other
	'u-clipboard',
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
