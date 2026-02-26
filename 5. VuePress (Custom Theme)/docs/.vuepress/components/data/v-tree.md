```ts
Vue.component("v-tree", {
  template: `<pre><code class="bash v-tree"><slot></slot></code></pre>`,
});
```

```css
.v-tree {
  line-height: 27px;
  border-left: 4px solid rgba(var(--color-sea-green-dark), 0.4);
}
.v-tree b {
  font-weight: normal;
  font-size: 14px;
  padding: 2px 5px;
  background: rgb(var(--color-white));
  color: rgb(var(--color-sea-green-dark));
  border-radius: 3px;
}
```
