ARR_MODULE = [
    {
        title: 'Информация',
        themes: [
            ['vue-js/main/info',            emoji.theory+'Информация'],
            ['vue-js/main/structure-files', 'Структура проекта'],
            ['vue-js/main/structure-code',  emoji.code+'Пример кода vue-cli'],
            ['vue-js/main/instance-vue',    emoji.code+'Экземпляр Vue'],
            ['vue-js/main/lifecycle-hooks', 'Хуки жизненного цикла'],
            ['theory/web/virtual-dom',     'Virtual DOM (Общее)'],
        ]
    },
    {
        title: 'Директивы',
        themes: [
            ['vue-js/directives/info',          'Шаблоны и директивы'],
            ['vue-js/directives/v-text_v-html', setTheme(1, ['v-text', 'v-html'])],
            ['vue-js/directives/v-show_v-if',   setTheme(1, ['v-show', 'v-if', 'v-else', 'v-else-if'])],
            ['vue-js/directives/v-for',         setTheme(1, ['v-for'])],
            ['vue-js/directives/v-on',          setTheme(1, ['v-on:'])],
            ['vue-js/directives/v-bind',        setTheme(1, ['v-bind:'])+' :class :style'],
            ['vue-js/directives/v-model',       setTheme(1, ['v-model'])],
            ['vue-js/directives/v-pre',         setTheme(1, ['v-pre'])],
            ['vue-js/directives/v-cloak',       setTheme(1, ['v-cloak'])],
            ['vue-js/directives/v-once',        setTheme(1, ['v-once'])],
        ]
    },
    {
        title: 'Компоненты',
        themes: [
            ['vue-js/components/info',                   emoji.theory+'Информация'],
            ['vue-js/components/component-simple',       'Простой компонент'],
            ['vue-js/components/component-registration', 'Регистрация компонента'],
            ['vue-js/components/component-global',       'Глобальный компонент'],
            ['vue-js/components/component-dynamic',      'Динамические компоненты'],
            ['vue-js/components/props',                  setTheme(1, ['props'])],
            ['vue-js/components/slot',                   setTheme(1, ['&lt;slot&gt;'])],
            ['vue-js/components/template',               setTheme(1, ['&lt;template&gt;'])],
            ['vue-js/components/emit',                   setTheme(1, ['$emit'])],
        ]
    },
    {
        title: 'Опции и прочее',
        themes: [
            ['vue-js/options-and-other/computed',   setTheme(1, ['computed'])],
            ['vue-js/options-and-other/watch',      setTheme(1, ['watch'])],
            ['vue-js/options-and-other/created',    setTheme(1, ['created'])],
            ['vue-js/options-and-other/transition', setTheme(1, ['&lt;transition&gt;'])],
            ['vue-js/options-and-other/vue-extend', setTheme(1, ['Vue.extend'])],
        ]
    },
    {
        title: 'DOM',
        themes: [
            ['vue-js/dom/event',  setTheme(1, ['$event'])+' - доступ к событию'],
            ['vue-js/dom/refs',   setTheme(1, ['$refs'])+' - ссылка на DOM элемент'],
        ]
    },
    {
        title: 'Реактивность',
        themes: [
            ['vue-js/reactivity/reactivity',   'Реактивность'],
            ['vue-js/reactivity/set',          setTheme(1, ['vm.$set'])+' - добаление реакт. элементов'],
            ['vue-js/reactivity/next-tick',    setTheme(1, ['vm.$nextTick'])+' - обновление'],
            ['vue-js/reactivity/force-update', setTheme(1, ['vm.$forceUpdate'])+' - переотрисовка'],
        ]
    },
    {
        title: 'Переиспользование и композиция',
        themes: [
            ['vue-js/composition/mixins',          'Примеси'],
            ['vue-js/composition/user-directives', 'Пользовательские директивы'],
            ['vue-js/composition/render',          'Render-функции'],
            ['vue-js/composition/plugins',         'Плагины'],
            ['vue-js/composition/filters',         'Фильтры'],
        ]
    },
    {
        title: 'Примеры',
        themes: [
            ['vue-js/samples/cart',   'Добавить / удалить из корзины'],
        ]
    },
]
