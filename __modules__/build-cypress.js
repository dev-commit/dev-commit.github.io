ARR_MODULE = [
    {
        title: 'Основное',
        themes: [
            ['cypress/main/info',        emoji.theory+'Информация'],
            ['cypress/main/npm',         emoji.lemon+'Установка'],
            ['cypress/main/code',        emoji.code+'Структура'],
        ]
    },
    {
        title: 'Методы',
        themes: [
            ['cypress/methods/should',   setTheme(1, ['should'])],
            ['cypress/methods/type',     setTheme(1, ['type', 'clear', 'blur'])],
            ['cypress/methods/visit',    setTheme(1, ['visit', 'pause', 'wait'])],
            ['cypress/methods/get',      setTheme(1, ['get'])],
            ['cypress/methods/fixture',  setTheme(1, ['fixture'])],
        ]
    },
    {
        title: 'Guides',
        themes: [
            ['cypress/guides/network-requests', emoji.favorite+'Network Requests'],
        ]
    },
]
