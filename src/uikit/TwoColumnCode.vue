<template><div class="v-two-wrapper"><div class="v-two-column v-two-column-half"><pre><code :class="textType[0]"><u-code-title v-text="textComment[0]"></u-code-title><slot name="first">User Default1</slot></code></pre></div><div class="v-two-column v-two-column-half"><pre><code :class="textType[1]"><u-code-title v-text="textComment[1]"></u-code-title><slot name="last">User Default2</slot></code></pre></div></div></template>

<script>
export default {
	props: ['type', 'comment'],
	computed: {
		textType() {
			return this.type.split(';');
		},
		textComment() {
			return this.comment.split(';');
		}
	},
}
</script>

<style scoped>
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
</style>
