root = 'vuepress/';

ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            getLink(root, 'info'),
            getLink(root, 'install'),
        ]
    },
    {
        title: 'Категории',
        themes: [
            [root+'category/deploy', 'Deploy'],
            [root+'category/img', 'Изображения'],
            [root+'category/favicon', 'Favicon'],
        ]
    },
    {
        title: 'Plugins',
        themes: [
            [root+'plugins/plugin-shiki', setTheme(1, ['plugin-shiki'])],
            [root+'plugins/plugin-register-components', setTheme(1, ['plugin-register-components'])],
            [root+'plugins/plugin-docsearch', setTheme(1, ['plugin-docsearch'])],
            [root+'plugins/plugin-search', setTheme(1, ['plugin-search'])],
        ]
    },
]
