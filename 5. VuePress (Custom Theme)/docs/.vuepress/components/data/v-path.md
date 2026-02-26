```ts
Vue.component("v-path", {
  template: `
		<div class="v-path-container">
			<span class="v-path-divider"></span>
			<span class="v-path-wrapper">
				<slot></slot>
			</span>
		</div>
	`,
});
```

```css
.v-path-container {
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: rgba(var(--color-blue-dark), 1);
  display: flex;
  gap: 10px;
  font-family: Consolas;
}
.v-path-container .v-path-divider {
  height: 32px;
  width: 3px;
  border-radius: 2px;
  background-color: rgba(var(--color-gray-80), 0.5);
}
.v-path-container .v-path-wrapper {
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: var(--border-radius-small);
  background-color: rgb(var(--color-gray-10));
}
```
