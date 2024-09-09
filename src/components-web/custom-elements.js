
const customElementRegistry = window.customElements;

const arrText    = ['u-text-underline', 'u-text-header', 'u-text-define', 'u-text-accent'];
const arrInline  = ['u-inline-circle', 'u-inline-border'];
const arrLetter  = ['u-lt'];
const arrMenu    = ['u-menu', 'u-menu-accent', 'u-menu-code', 'u-menu-border', 'u-menu-unactive', 'u-menu-outline', 'u-menu-gray', 'u-menu-error'];
const arrCode    = ['u-code', 'u-code-accent', 'u-code-mod', 'u-code-text', 'u-code-flat', 'u-code-list', 'u-code-comment', 'u-code-light'];
const arrMessage = ['u-message-ok', 'u-message-info', 'u-message-warn', 'u-message-error', 'u-message-comment'];
const arrBlocks  = ['u-block-left-padding', 'u-block-quote'];
const arrFetures = ['f-search'];

const arrStructure = [
	'u-code-wrapper',
	'u-code-title', // для "v-code" и "u-code-wrapper"
	'u-link-wrapper',
	'u-clipboard',
];

const arrCustomElements = [
	...arrText,
	...arrInline,
	...arrLetter,
	...arrMenu,
	...arrCode,
	...arrMessage,
	...arrBlocks,
	...arrStructure,
	...arrFetures,
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
