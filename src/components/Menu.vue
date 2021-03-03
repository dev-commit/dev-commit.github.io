<template>
    <div class="wrapper">
        <div class="item item-tech" v-for="item in category" :key="item">
            <a @click="$emit('changeCategory', item)">
                {{themes[item].title}}
            </a>
        </div>
    </div>
</template>

<script>
import { THEMES } from '@/themes/themes.js';

export default {
    data() {
        return {
            themes: THEMES,
            category: Object.keys(THEMES),
        }
    },
}
</script>

<style lang="scss" scoped>

@mixin menu-color($color) {
    background: rgba($color, 0.15);
    color: rgba($color, 1);
}

.wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 0;
}

.item {
    margin: 5px;
    background: var(--white);
    padding: 5px;
    border-radius: var(--border-radius);
    flex-shrink: 0;
}
a {
    text-decoration: none;
    font-size: 15px;
    padding: 7px 15px;
    margin: 3px 0;
    cursor: pointer;
    display: inline-block;
    color: inherit;
    margin: 5px;
    background: rgba(255, 255, 255, 0.55);
    font-weight: bold;
}

.item-js        { @include menu-color(var(--color-green)); }
.item-framework { @include menu-color(var(--color-green-blue)); }
.item-tech      { @include menu-color(var(--color-green)); }
.item-other     { @include menu-color(var(--color-green-blue)); }
.item-html      { @include menu-color(var(--color-green-blue)); }
.item-backend   { @include menu-color(var(--color-green-blue)); }
</style>
