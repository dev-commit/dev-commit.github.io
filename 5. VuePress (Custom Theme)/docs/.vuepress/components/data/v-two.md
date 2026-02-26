```ts
Vue.component("v-two-code", {
  props: ["type", "comment"],
  computed: {
    textType() {
      return this.type.split(";");
    },
    textComment() {
      return this.comment.split(";");
    },
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
```

```ts
Vue.component("v-two", {
  template: `<div class="v-two-wrapper">
			<div class="v-two-column v-two-column-half">
				<slot name="first">User Default1</slot>
			</div>
			<div class="v-two-column v-two-column-half">
				<slot name="last">User Default2</slot>
			</div>
		</div>`,
});
```

```ts
Vue.component("v-two-fix", {
  props: ["revert"],
  template: `<div class="v-two-wrapper">
			<div :style="!revert && 'flex-grow: 1'" class="v-two-column">
				<slot name="first">User Default1</slot>
			</div>
			<div :style="revert && 'flex-grow: 1'" class="v-two-column">
				<slot name="last">User Default2</slot>
			</div>
		</div>`,
});
```

```ts
Vue.component("v-two-code-comment", {
  template: `<v-two-fix revert="true">
			<template v-slot:first>
				<slot name="first">User Default1</slot>
			</template>
			<template v-slot:last>
				<div class="v-two-code-comment-block">
					<slot name="last">User Default2</slot>
				</div>
			</template>
		</v-two-fix>`,
});
```

```ts
Vue.component('v-two-border', {
	props: ['title'],
	computed: {
		getTitle() {
			return this.title.split(';')
		},
	},t-teo
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
```

```css
.v-two-wrapper {
  display: flex;
  margin: 10px 0px;
}
.v-two-column {
  margin: 0px 5px;
}
.v-two-column-half {
  width: 50%;
}
.v-two-code-comment-block {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: calc(100% - 20px);
  margin: 10px 0;
}
.v-two-border {
  box-shadow: var(--box-shadow);
}
.v-two-title {
  padding: 10px;
  font-weight: bold;
}
.v-two-bg-accent {
  background-color: rgba(var(--color-sea-green-light), 0.5);
}
.v-two-bg-light {
  background-color: rgb(var(--color-gray-20));
}
.v-two-vertical-top {
  align-items: flex-start;
}
```
