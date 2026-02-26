```ts
Vue.component("v-alert", {
  props: ["type"],
  template: `
		<span>
			<u-code v-if="type === 'error'">👿</u-code>
			<u-code v-else-if="type === 'warning'">👽</u-code>
			<u-code v-else>👻</u-code>
		</span>
	`,
});
```
