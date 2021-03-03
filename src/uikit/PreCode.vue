<template><pre><code :class="lang"><u-code-title v-text="title" /><slot></slot></code></pre></template>

<script>
export default {
	props: ['lang', 'title'],
}
</script>
