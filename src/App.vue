<template>
    <div id="container">
        <app-menu @changeCategory="category = $event" id="menu" />
        <app-themes :category="category" id="themes" />

        <app-content v-if="category" :category="category" id="content" />

        <app-cheat />
    </div>
</template>

<script>
import Menu from '@/components/Menu';
import Themes from '@/components/Themes.vue';
import Content from '@/components/Content.vue';
import Cheat from '@/components/Cheat.vue';

export default {
    data() {
        return {
            category: null,
        }
    },
    components: {
        'app-menu': Menu,
        'app-themes': Themes,
        'app-content': Content,
        'app-cheat': Cheat,
    },
}
</script>

<style lang="scss">
@import './styles/vars';
@import './styles/main';
@import './styles/highlight';
@import './uikit/styles';
@import './custom-elements/custom-elements';

#container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 300px 1fr;
    grid-template-rows: auto 50vh;
    grid-template-areas: 
        "themes menu"
        "themes content";
}
#menu {
    grid-area: menu;
    border: 1px solid #000;
}
#themes {
    grid-area: themes;
    width: 300px;
    border: 1px solid #000;
}
#content {
    grid-area: content;
    width: 100%;
    border: 1px solid #000;
}
</style>
