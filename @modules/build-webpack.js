root = 'webpack/';

ARR_MODULE = [
    {
        title: 'Информация',
        themes: [
            [root+'main/info',      emoji.theory+'Информация'],
            [root+'main/structure', emoji.code+'Структура'],
            [root+'main/scripts',   'Скрипты'],
        ]
    },
    {
        title: 'Module Federation',
        themes: [
            [root+'module-federation/info',                    emoji.theory+'Информация'],
            [root+'module-federation/semver',                  emoji.theory+'Semver'],
            [root+'module-federation/code',                    emoji.code+'Код'],
            [root+'module-federation/server',                  emoji.code+'Сервер'],
            [root+'module-federation/eager',                   emoji.code+'Eager Troubleshooting'],
            [root+'module-federation/ModuleFederationPlugin',  setTheme(1, ['ModuleFederationPlugin'])],
        ]
    },
    {
        title: 'plugins',
        themes: [
            [root+'plugins/webpack',                 setTheme(2, ['webpack', 'webpack-cli'])],
            [root+'plugins/webpack-dev-server',      setTheme(2, ['webpack-dev-server'])],
            [root+'plugins/babel',                   setTheme(2, ['babel-loader'])],
            [root+'plugins/html-webpack-plugin',     setTheme(2, ['html-webpack-plugin'])],
            [root+'plugins/clean-webpack-plugin',    setTheme(1, ['clean-webpack-plugin'])],
            [root+'plugins/react',                   setTheme(1, ['react'])],
        ]
    },
    {
        title: 'loaders',
        themes: [
            [root+'loaders/css-loader',              setTheme(2, ['css-loader'])],
            [root+'loaders/mini-css-extract-plugin', setTheme(2, ['mini-css-extract-plugin'])],
            [root+'loaders/style-loader',            setTheme(1, ['style-loader'])],
            [root+'loaders/sass-loader',             setTheme(1, ['sass-loader'])],
            [root+'loaders/file-loader',             setTheme(2, ['file-loader'])],
            [root+'loaders/image-webpack-loader',    setTheme(1, ['image-webpack-loader'])],
            [root+'loaders/html-loader',             setTheme(1, ['html-loader'])],
        ]
    },
    {
        title: 'postcss',
        themes: [
            [root+'postcss/postcss-loader',          setTheme(1, ['postcss-loader'])],
            [root+'postcss/autoprefixer',            setTheme(1, ['autoprefixer'])],
            [root+'postcss/cssnano',                 setTheme(1, ['cssnano'])],
            [root+'postcss/css-mqpacker',            setTheme(1, ['css-mqpacker'])],
        ]
    },
    {
        title: 'options',
        themes: [
            [root+'options/mode',                    setTheme(4, ['mode'])],
            [root+'options/devtool',                 setTheme(4, ['devtool'])],
            [root+'options/entry-output',            setTheme(4, ['entry', 'output'])],
            [root+'options/library',                 setTheme(4, ['library'])],
            [root+'options/watch',                   setTheme(4, ['watch', 'watchOptions'])],
            [root+'options/resolve',                 setTheme(4, ['resolve'])],
        ]
    },
]
