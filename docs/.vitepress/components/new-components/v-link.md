```ts
Vue.component("v-link", {
  props: ["url", "title", "text", "list"],
  template: `
		<span :style="!!list && 'display: block'">
			<span class="v-link-icon" v-if="list" v-text="'›'"></span>
			<a
				:href="url"
				target="_blank"
				v-html="title ? title : url">
			</a>
			<span v-if="text" v-html="' - ' + text"></span>
		</span>
	`,
});
```

```css
.v-link-icon {
  padding-left: 10px;
  padding-right: 5px;
}
```
