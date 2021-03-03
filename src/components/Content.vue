<template>
    <div class="wrapper">

        {{category}}
        <app-theme />

    </div>
</template>

<script>
export default {
    props: ['category'],
    components: {
        'app-theme': null,
    },
    methods: {
        applyHighlightjs() {
            document.querySelectorAll('pre code').forEach((block) => {
                hljs.highlightBlock(block);
            });
        },
        getComponent() {
            this.$options.components['app-theme'] = require(`@/themes/pages/${this.category}.vue`).default;
        },
    },

    beforeUpdate() { this.getComponent(); },
    beforeMount() { this.getComponent(); },
    mounted() { this.applyHighlightjs(); },
    updated() { this.applyHighlightjs(); },
}
</script>
