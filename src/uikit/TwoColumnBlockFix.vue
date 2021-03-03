<template>
    <div class="v-two-wrapper">
        <div class="v-two-column v-two-column-grow">
            <slot name="first">User Default1</slot>
        </div>
        <div class="v-two-column">
            <slot name="last">User Default2</slot>
        </div>
    </div>
</template>

<style scoped>
.v-two-wrapper {
	display: flex;
	margin: 10px 0px;
}
.v-two-column {
	margin: 0px 5px;
}
.v-two-column-grow {
	flex-grow: 1;
}
</style>
