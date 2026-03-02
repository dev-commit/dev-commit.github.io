```ts
Vue.component("v-tabs", {
  props: ["tabs"],
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
});
```

```css
.v-tabs-container {
  display: flex;
  height: 600px;
  margin: 10px 0;
  overflow: hidden;
  border: 2px solid rgba(var(--color-sea-green-light), 0.2);
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  background-color: rgba(var(--color-sea-green-light), 0.02);
}
.v-tabs-button {
  display: block;
  width: 100%;
  padding: 10px 12px;
  border: 1px solid rgb(var(--color-sea-green-light));
  border-radius: 2px;
  text-align: left;
  background: rgba(var(--color-gray-10), 0.9);
  cursor: pointer;
}
.v-tabs-hidden {
  display: none;
}
.v-tabs-active {
  background: rgba(var(--color-sea-green-light), 0.3);
}
.v-tabs-content {
  flex-grow: 1;
  padding: 5px;
  overflow: auto;
}
.v-tabs-content pre {
  margin: 0;
}
.v-tabs-tabs {
  border-right: 2px solid rgba(var(--color-sea-green-light), 0.2);
  background-color: rgba(var(--color-sea-green-light), 0.1);
}

.v-tabs-container {
  margin: 0;
  padding: 0;
  font-size: 15px;
}
.v-tabs-container {
  font-style: normal;
}
```
