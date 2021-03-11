ARR_MODULE = [
    {
        title: 'Информация',
        themes: [
            ['webpack/main/info',      emoji.theory+'Информация'],
            ['webpack/main/structure', emoji.code+'Структура'],
            ['webpack/main/scripts',   'Скрипты'],
        ]
    },
    {
        title: 'plugins',
        themes: [
            ['webpack/plugins/webpack',                 setTheme(2, ['webpack', 'webpack-cli'])],
            ['webpack/plugins/webpack-dev-server',      setTheme(2, ['webpack-dev-server'])],
            ['webpack/plugins/babel',                   setTheme(2, ['babel-loader'])],
            ['webpack/plugins/html-webpack-plugin',     setTheme(2, ['html-webpack-plugin'])],
            ['webpack/plugins/clean-webpack-plugin',    setTheme(1, ['clean-webpack-plugin'])],
            ['webpack/plugins/react',                   setTheme(1, ['react'])],
        ]
    },
    {
        title: 'loaders',
        themes: [
            ['webpack/loaders/css-loader',              setTheme(2, ['css-loader'])],
            ['webpack/loaders/mini-css-extract-plugin', setTheme(2, ['mini-css-extract-plugin'])],
            ['webpack/loaders/style-loader',            setTheme(1, ['style-loader'])],
            ['webpack/loaders/sass-loader',             setTheme(1, ['sass-loader'])],
            ['webpack/loaders/file-loader',             setTheme(2, ['file-loader'])],
            ['webpack/loaders/image-webpack-loader',    setTheme(1, ['image-webpack-loader'])],
            ['webpack/loaders/html-loader',             setTheme(1, ['html-loader'])],
        ]
    },
    {
        title: 'postcss',
        themes: [
            ['webpack/postcss/postcss-loader',          setTheme(1, ['postcss-loader'])],
            ['webpack/postcss/autoprefixer',            setTheme(1, ['autoprefixer'])],
            ['webpack/postcss/cssnano',                 setTheme(1, ['cssnano'])],
            ['webpack/postcss/css-mqpacker',            setTheme(1, ['css-mqpacker'])],
        ]
    },
    {
        title: 'options',
        themes: [
            ['webpack/options/mode',                    setTheme(4, ['mode'])],
            ['webpack/options/devtool',                 setTheme(4, ['devtool'])],
            ['webpack/options/entry-output',            setTheme(4, ['entry', 'output'])],
            ['webpack/options/library',                 setTheme(4, ['library'])],
            ['webpack/options/watch',                   setTheme(4, ['watch', 'watchOptions'])],
            ['webpack/options/resolve',                 setTheme(4, ['resolve'])],
        ]
    },
]
