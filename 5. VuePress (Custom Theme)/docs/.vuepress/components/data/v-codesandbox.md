```ts
Vue.component("v-sandbox", {
  props: {
    url: String,
    title: String,
    codepen: Boolean,
    codesandbox: Boolean,
  },
  methods: {
    getTitle() {
      if (this.title) return this.title;
      if (this.codesandbox) return "CodeSandbox";
      if (this.codepen) return "CodePen";
      return "Code Sample";
    },
  },
  template: `
		<div class="v-sandbox">
			<span :class="{
				item: true,
				codesandbox: codesandbox,
				codepen: codepen,
			}">
				⭐️ <a
					:href="url"
					v-html="getTitle()"
					target="_blank"
				></a>
			</span>
		</div>
	`,
});
```

```css
.v-sandbox {
  font-size: 14px;
  line-height: 2.2;
}
.v-sandbox .item {
  border: 1px solid rgba(var(--color-black), 0.4);
  background-color: #fff;
  color: rgba(var(--color-black), 1);
  padding: 3px 5px;
  border-radius: 5px;
}
.v-sandbox .codesandbox {
  border: none;
  background-color: rgba(var(--color-violet-medium), 0.7);
  color: rgb(var(--color-white));
}
.v-sandbox .codepen {
  border: none;
  background-color: rgba(var(--color-green), 0.7);
  color: rgb(var(--color-white));
}
.v-sandbox a {
  text-decoration: none;
  color: inherit;
}

@media screen and (max-width: 950px) {
  .v-two-wrapper {
    flex-direction: column;
  }
  .v-two-column-half {
    width: 100%;
  }
}
```
