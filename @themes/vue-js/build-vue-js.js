root = 'vue-js/';

const vue2 = ' <u-code-accent>Vue 2</u-code-accent>';
const vue3 = ' <u-code-mod>Vue 3</u-code-mod>';

ARR_MODULE = [
    {
        title: 'Информация',
        themes: [
            [root+'main/links',                 emoji.theory+'Ссылки', false, 'done'],
            [root+'main/structure-files',       emoji.theory+'Структура проекта', false, 'done'],
            [],
            getLink(root, 'info'),
            ['react-js/reconciler/virtual-dom', emoji.theory+'Virtual DOM (Общее)'],
        ]
    },
    {
        title: 'Usage',
        accent: true,
        themes: [
            [root+'usage/cdn',     emoji.code+'CDN'+vue2, false, 'done'],
            [root+'usage/vue-cli', emoji.code+'Vue CLI'+vue2, false, 'done'],
            [root+'usage/vite',    emoji.code+'Vite'+vue3, false, 'done'],
        ]
    },
    {
        title: 'Lifecycle',
        themes: [
            [root+'lifecycle/vue2',  emoji.theory+'Vue 2', false, 'done'],
            [root+'lifecycle/vue3',  emoji.theory+'Vue 3', false, 'done'],
            [root+'lifecycle/usage', emoji.code+'Usage', false, 'done'],
        ]
    },
    {
        title: 'Директивы',
        themes: [
            [root+'directives/info',          emoji.theory+'Информация'],
            [root+'directives/v-text_v-html', setTheme(1, ['v-text', 'v-html'])],
            [root+'directives/v-show_v-if',   setTheme(1, ['v-show', 'v-if', 'v-else', 'v-else-if'])],
            [root+'directives/v-for',         setTheme(1, ['v-for'])],
            [root+'directives/v-on',          setTheme(1, ['v-on:'])],
            [root+'directives/v-bind',        setTheme(1, ['v-bind:'])+' :class :style'],
            [root+'directives/v-model',       setTheme(1, ['v-model'])],
            [root+'directives/v-pre',         setTheme(1, ['v-pre'])],
            [root+'directives/v-cloak',       setTheme(1, ['v-cloak'])],
            [root+'directives/v-once',        setTheme(1, ['v-once'])],
        ]
    },
    {
        title: 'Компоненты',
        themes: [
            [root+'components/info',                   emoji.theory+'Информация'],
            [root+'components/component-simple',       'Простой компонент'],
            [root+'components/component-registration', 'Регистрация компонента'],
            [root+'components/component-global',       'Глобальный компонент'],
            [root+'components/component-dynamic',      'Динамические компоненты'],
            [root+'components/props',                  setTheme(1, ['props'])],
            [root+'components/slot',                   setTheme(1, ['&lt;slot&gt;'])],
            [root+'components/template',               setTheme(1, ['&lt;template&gt;'])],
            [root+'components/emit',                   setTheme(1, ['$emit'])],
        ]
    },
    {
        title: 'Опции и прочее',
        themes: [
            [root+'options-and-other/computed',   setTheme(1, ['computed'])],
            [root+'options-and-other/watch',      setTheme(1, ['watch'])],
            [root+'options-and-other/transition', setTheme(1, ['&lt;transition&gt;'])],
            [root+'options-and-other/vue-extend', setTheme(1, ['Vue.extend'])],
        ]
    },
    {
        title: 'DOM',
        themes: [
            [root+'dom/event',  setTheme(1, ['$event'])],
            [root+'dom/refs',   setTheme(1, ['$refs'])],
        ]
    },
    {
        title: 'Реактивность',
        themes: [
            [root+'reactivity/reactivity',   'Реактивность'],
            [root+'reactivity/set',          setTheme(1, ['vm.$set'])],
            [root+'reactivity/next-tick',    setTheme(1, ['vm.$nextTick'])],
            [root+'reactivity/force-update', setTheme(1, ['vm.$forceUpdate'])],
        ]
    },
    {
        title: 'Переиспользование и композиция',
        themes: [
            [root+'composition/mixins',          'Примеси'],
            [root+'composition/user-directives', 'Пользовательские директивы'],
            [root+'composition/render',          'Render-функции'],
            [root+'composition/plugins',         'Плагины'],
            [root+'composition/filters',         'Фильтры'],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            [root+'samples/cart', 'Добавить / удалить из корзины'],
        ]
    },
]
