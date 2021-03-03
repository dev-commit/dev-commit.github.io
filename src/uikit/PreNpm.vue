<template><pre class="v-pre-npm"><code class="bash"><slot></slot></code></pre></template>

<style scoped>
.v-pre-npm code {
	background: none !important;
	position: relative;
	padding: 0px 15px 15px 25px !important;
}
.v-pre-npm code:before {
	content: '';
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	width: 3px;
	height: 100%;
	background: rgba(var(--color-php), 1);
}
</style>