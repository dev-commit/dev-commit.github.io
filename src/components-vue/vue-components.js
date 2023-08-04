
Vue.component('v-two-code', {
	props: ['type', 'comment'],
	computed: {
		textType() {
			return this.type.split(';');
		},
		textComment() {
			return this.comment.split(';');
		}
	},
	template: `<div class="v-two-wrapper"><div class="v-two-column v-two-column-half"><pre><code :class="textType[0]"><u-code-title v-html="textComment[0]"></u-code-title><slot name="first">User Default1</slot></code></pre></div><div class="v-two-column v-two-column-half"><pre><code :class="textType[1]"><u-code-title v-html="textComment[1]"></u-code-title><slot name="last">User Default2</slot></code></pre></div></div>`,
    // template:  `
    // 	<div class="v-two-wrapper">
    // 		<div class="v-two-column v-two-column-half">
    // 			<pre><code :class="textType[0]">
    // 				<u-code-title v-html="textComment[0]"></u-code-title>
    // 				<slot name="first">User Default1</slot>
    // 			</code></pre>
    // 		</div>
    // 		<div class="v-two-column v-two-column-half">
    // 			<pre><code :class="textType[1]">
    // 				<u-code-title v-html="textComment[1]"></u-code-title>
    // 				<slot name="last">User Default2</slot>
    // 			</code></pre>
    // 		</div>
    // 	</div>`
});

Vue.component('v-two', {
    template:
		`<div class="v-two-wrapper">
			<div class="v-two-column v-two-column-half">
				<slot name="first">User Default1</slot>
			</div>
			<div class="v-two-column v-two-column-half">
				<slot name="last">User Default2</slot>
			</div>
		</div>`,
})

Vue.component('v-two-fix', {
	props: ['revert'],
    template:
		`<div class="v-two-wrapper">
			<div :style="!revert && 'flex-grow: 1'" class="v-two-column">
				<slot name="first">User Default1</slot>
			</div>
			<div :style="revert && 'flex-grow: 1'" class="v-two-column">
				<slot name="last">User Default2</slot>
			</div>
		</div>`,
})

Vue.component('v-two-code-comment', {
    template:
		`<v-two-fix revert="true">
			<template v-slot:first>
				<slot name="first">User Default1</slot>
			</template>
			<template v-slot:last>
				<div class="v-two-code-comment-block">
					<slot name="last">User Default2</slot>
				</div>
			</template>
		</v-two-fix>`,
})

Vue.component('v-two-border', {
	props: ['title'],
	computed: {
		getTitle() {
			return this.title.split(';')
		},
	},
    template:
		`<div class="v-two-wrapper v-two-vertical-top">
			<div class="v-two-column v-two-column-half v-two-border">
				<div class="v-two-title v-two-bg-accent" v-text="getTitle[0]"></div>
				<slot name="first">User Default1</slot>
			</div>
			<div class="v-two-column v-two-column-half v-two-border">
				<div class="v-two-title v-two-bg-light" v-text="getTitle[1]"></div>
				<slot name="last">User Default2</slot>
			</div>
		</div>`,
})

Vue.component('v-method', {
	props: ['before', 'method', 'after', 'arg'],
    template:
		`<div>
			<span class="el expression" v-if="before.length!==0">{{before}}</span>
			<span class="el method">{{method}}</span>
			<span class="el expression" v-if="after.length!==0">{{after}}</span>
			<span class="el expression" v-if="arg.length!==0">{{arg}}</span>
			<span class="el text">
				- <slot></slot>
			</span>
		</div>`,
})
Vue.component('v-method-arg', {
	props: ['arg'],
    template:
		`<div class="v-method-arg--wrapper">
			<span class="icon"></span>
			<span class="el arg">{{arg}}</span>
			<span class="el text">
				&nbsp; - <slot></slot>
			</span>
		</div>`,
})
Vue.component('v-method-return', {
    template:
		`<div class="v-method-return--wrapper">
			<span class="icon"></span>
			<span class="el arg">return</span>
			<span class="el text">- <slot></slot></span>
		</div>`,
})

Vue.component('v-iframe', {
	props: ['height', 'src'],
	template:
		`<iframe
			:src="src"
			:height="height"
			style="width: 100%;"
			scrolling="no"
			frameborder="no"
			allowtransparency="true"
			allowfullscreen="true"
		>
		</iframe>`,
})

Vue.component('v-code', {
	props: ['lang', 'title'],
    template: `<pre><code :class="lang"><u-code-title v-if="title" v-text="title" /><slot></slot></code></pre>`
})

Vue.component('v-pre-npm', {
	template: `<pre class="v-pre-npm"><code class="bash"><slot></slot></code></pre>`,
    // template:
	// 	`<pre class="v-pre-npm"><code class="bash">
	// 		<slot></slot>
	// 	</code></pre>`,
})

Vue.component('v-details', {
	props: ['title'],
    template: `
		<details class="v-details">
			<summary v-html="title"></summary>
			<slot></slot>
		</details>
	`,
})

Vue.component('v-marker', {
	props: ['marker'],
    template: `
		<span>
			<span v-if="marker === '+'">✅</span>
			<span v-if="marker === '-'">🅾️</span>
			<span v-if="marker === '*'">🚀</span>
		</span>
	`,
})

Vue.component('v-copy', {
	template: `<u-code-flat><u-clipboard><slot></slot></u-clipboard></u-code-flat>`,
})

Vue.component('v-link', {
	props: ['url'],
    template: `<a :href="url" target="_blank" v-html="url"></a>`,
})

Vue.component('v-alert', {
	props: ['type'],
    template: `
		<span>
			<u-code v-if="type === 'error'">👿</u-code>
			<u-code v-else-if="type === 'warning'">👽</u-code>
			<u-code v-else>👻</u-code>
		</span>
	`,
})

Vue.component('v-path', {
    template: `
		<h4>
			<u-code-text>☄️</u-code-text>
			<i>
				<slot></slot>
			</i>
		</h4>
	`,
})

Vue.component('v-tree', {
    template: `<pre><code class="bash v-tree"><slot></slot></code></pre>`
})

Vue.component('v-sandbox', {
	props: ['url', 'title', 'ok', 'codepen'],
    template: `
		<div class="v-sandbox">
			<span :class="{
				none: true,
				codesandbox: ok && !codepen,
				codepen: ok && codepen,
			}">
				⭐️ <a
					:href="url"
					v-html="title ? title : (codepen ? 'CodePen' : 'CodeSandbox')"
					target="_blank"
				></a>
			</span>
		</div>
	`
})

Vue.component('v-tabs', {
	props: ['tabs'],
	data() {
		return {
			currentTab: 1,
		};
	},
	mounted() {
		this.$refs.content.innerHTML = this.$refs[this.currentTab][0].innerHTML;
	},
	methods: {
		menu(i) {
		  this.$refs.content.innerHTML = this.$refs[i][0].innerHTML;
		  this.currentTab = i;
		},
	},
    template: `
		<div class="v-tabs-container">
			<div class="v-tabs-tabs">
				<div v-for="(item, i) in tabs" :key="i">
					<button
						class="v-tabs-button"
						:class="i + 1 === currentTab && 'v-tabs-active'"
						@click="menu(i + 1)"
						v-html="item"
					></button>
					<div :ref="i + 1" class="v-tabs-hidden">
						<slot :name="i + 1"></slot>
					</div>
				</div>
			</div>
			<div class="v-tabs-content" ref="content">Content</div>
		</div>
	`,
})

const app = new Vue({
	el: '#content'
})
