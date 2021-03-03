<template>
    <div class="wrapper">

        <div v-for="(item, i) in content" :key="i">
            <h4>{{item.title}}</h4>
            <ul v-for="(itemContent, j) in item.content" :key="j">
                <li>{{itemContent}}</li>
            </ul>
        </div>

    </div>
</template>

<script>
import { THEMES } from '@/themes/themes.js';

export default {
    props: ['category'],
    computed: {
		title() {
            if (this.category) {
                return THEMES[this.category].title;
            }

            return null;
        },
        content() {
            if (this.category) {
                return THEMES[this.category].content;
            }

            return null;
		}
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 10px;
}
h1 {
    font-size: 20px;
    color: yellowgreen;
    padding: 7px 15px;
    margin: 0;
    margin-bottom: 5px;
}
h2 {
    font-size: 18px;
    color: yellowgreen;
    padding: 7px 15px;
    margin: 0;
    margin-bottom: 5px;
}
a {
    text-decoration: none;
    font-size: 14px;
    padding: 7px 15px;
    margin: 3px 0;
    cursor: pointer;
    display: inline-block;
    color: inherit;
    width: 100%;
    background: rgba(255, 255, 255, 0.55);
}
</style>