
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
	template: `<div class="v-two-wrapper"><div class="v-two-column v-two-column-half"><pre><code :class="textType[0]"><u-code-title v-text="textComment[0]"></u-code-title><slot name="first">User Default1</slot></code></pre></div><div class="v-two-column v-two-column-half"><pre><code :class="textType[1]"><u-code-title v-text="textComment[1]"></u-code-title><slot name="last">User Default2</slot></code></pre></div></div>`,
    // template:  `
    // 	<div class="v-two-wrapper">
    // 		<div class="v-two-column v-two-column-half">
    // 			<pre><code :class="textType[0]">
    // 				<u-code-title v-text="textComment[0]"></u-code-title>
    // 				<slot name="first">User Default1</slot>
    // 			</code></pre>
    // 		</div>
    // 		<div class="v-two-column v-two-column-half">
    // 			<pre><code :class="textType[1]">
    // 				<u-code-title v-text="textComment[1]"></u-code-title>
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
    template:
		`<div class="v-two-wrapper">
			<div class="v-two-column v-two-column-grow">
				<slot name="first">User Default1</slot>
			</div>
			<div class="v-two-column">
				<slot name="last">User Default2</slot>
			</div>
		</div>`,
})


Vue.component('v-pre-npm', {
	template: `<pre class="v-pre-npm"><code class="bash"><slot></slot></code></pre>`,
    // template:
	// 	`<pre class="v-pre-npm"><code class="bash">
	// 		<slot></slot>
	// 	</code></pre>`,
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
    template: `<pre><code :class="lang"><u-code-title v-text="title" /><slot></slot></code></pre>`
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

const app = new Vue({
	el: '#content'
})


