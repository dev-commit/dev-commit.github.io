/*
THEME:
- primary | secondary | accent | actual
- react | node | js | vue | html
- tech
*/

// const theory = '<span style="filter: drop-shadow(0px 0px 0.2px #000);">📑 </span> ';
const accent = '<span style="filter: drop-shadow(0px 0px 0.5px #000);">⭐️ </span>';
const search = `
    <div
        style="
            display: inline-block;
            width: 10px;
            height: 10px;
            margin-right: 5px;
            background-color: #7256d1;
            border-radius: 50%;
            border: 2px solid #fff;
        "   
        >
    </div>
`

// #2bd8ff

const ARR_LINKS = [
    { page: 'wiki',                    theme: 'primary',   title: 'Wiki' },
    { page: 'js-task',                 theme: 'primary ',  title: search+'Задачи' },
    { page: 'compilation',             theme: 'primary',   title: accent },
    { page: 'agile',                   theme: 'secondary', title: 'Agile | Jira' },
    { page: 'ci-cd',                   theme: 'secondary', title: 'CI / CD' },
    { page: 'mvc',                     theme: 'secondary', title: 'MVC ...' },
    { page: 'english',                 theme: 'secondary', title: 'English' },
    null,
    { page: 'theory-algoritms',        theme: 'primary',    title: search+'Алгоритмы' },
    { page: 'theory-data-structures',  theme: 'primary',    title: search+'Структуры данных' },
    { page: 'theory-design-patterns',  theme: 'primary',    title: search+'Паттерны проектирования' },
    { page: 'theory-solid',            theme: 'primary',    title: 'SOLID' },
    { page: 'theory-paradigms',        theme: 'primary',    title: 'Парадигмы' },
    { page: 'theory-refactoring',      theme: 'primary',    title: 'Рефакторинг' },
    null,
    { page: 'event-loop',              theme: 'accent',   title: search+accent+'Event Loop | Optimize' },
    null,
    { page: 'js',                      theme: 'js',        title: search+accent+'JavaScript' },
    { page: 'js-object',               theme: 'js',        title: search+'Object' },
    { page: 'js-array',                theme: 'js',        title: 'Array' },
    { page: 'js-string',               theme: 'js',        title: 'String' },
    { page: 'js-function',             theme: 'js',        title: 'Function' },
    { page: 'js-class',                theme: 'js',        title: search+'Class' },
    null,
    { page: 'js-async',                theme: 'js',        title: 'Async' },
    { page: 'js-promise',              theme: 'js',        title: search+'Promise' },
    { page: 'js-ajax',                 theme: 'js',        title: 'Ajax' },
    { page: 'axios',                   theme: 'react',     title: 'Axios' },
    { page: 'tan-stack-query',         theme: 'react',     title: 'TanStack Query' },
    { page: 'swr',                     theme: 'react',     title: 'SWR' },
    { page: 'theory-network',          theme: 'primary',   title: 'HTTP | Protocols' },
    { page: 'network',                 theme: 'primary',   title: 'Network' },
    { page: 'auth',                    theme: 'primary',   title: search+'Auth' },

    null,
    { page: 'js-regexp',               theme: 'js',        title: 'RegExp' },
    { page: 'js-web-api',              theme: 'js',        title: search+'Web API' },
    { page: 'canvas',                  theme: 'secondary', title: 'Canvas' },
    { page: 'web-components',          theme: 'secondary', title: 'Web Components' },
    null,
    { page: 'react-app',               theme: 'accent',    title: accent+'React App' },
    { page: 'react-js',                theme: 'react',     title: search+accent+'React.js' },
    { page: 'react-hooks',             theme: 'react',     title: 'React Hooks' },
    { page: 'react-api',               theme: 'react',     title: 'React API' },
    { page: 'react-router',            theme: 'react',     title: search+'React Router' },
    { page: 'material-ui',             theme: 'react',     title: 'MUI' },
    { page: 'reactflow',               theme: 'react',     title: search+'React Flow' },
    { page: 'react-select',            theme: 'secondary', title: 'React Select' },
    { page: 'react-use',               theme: 'secondary', title: 'React Use' },
    { page: 'prop-types',              theme: 'secondary', title: 'PropTypes' },
    null,
    { page: 'redux',                   theme: 'react',     title: search+'Redux' },
    { page: 'react-redux',             theme: 'react',     title: search+'React Redux' },
    { page: 'redux-toolkit',           theme: 'react',     title: 'Redux Toolkit' },
    { page: 'redux-saga',              theme: 'react',     title: search+'Redux Saga' },
    { page: 'reselect',                theme: 'react',     title: 'Reselect' },
    { page: 'zustand',                 theme: 'react',     title: 'Zustand' },
    null,
    { page: 'formik',                  theme: 'react',     title: search+'Formik' },
    { page: 'yup',                     theme: 'react',     title: 'Yup' },
    { page: 'react-hook-form',         theme: 'actual',    title: 'React Hook Form' },
    { page: 'react-final-form',        theme: 'secondary', title: 'React Final Form' },
    null,
    { page: 'next-js',                 theme: 'react',     title: 'Next.js' },
    { page: 'node-js',                 theme: 'node',      title: search+'Node.js' },
    { page: 'node-js-express',         theme: 'node',      title: search+'Express' },
    { page: 'nest-js',                 theme: 'node',      title: search+'Nest.js' },
    { page: 'mongodb',                 theme: 'actual',    title: 'MongoDB' },
    { page: 'react-native',            theme: 'actual',    title: 'React Native' },
    null,
    { page: 'vue-js',                  theme: 'vue',       title: search+accent+'Vue.js' },
    { page: 'vuepress',                theme: 'vue',       title: search+'VuePress' },
    { page: 'vue-vuex',                theme: 'secondary', title: search+'Vuex' },
    { page: 'vue-router',              theme: 'secondary', title: search+'Vue Router' },
    { page: 'vue-cli',                 theme: 'secondary', title: 'Vue CLI' },
    { page: 'vue-plugins',             theme: 'secondary', title: 'Vue Plugins' },
    null,
    { page: 'testing',                 theme: 'primary',   title: search+'Testing' },
    { page: 'jest',                    theme: 'primary',   title: search+'Jest' },
    { page: 'enzyme',                  theme: 'primary',   title: search+'Enzyme + Jest' },
    { page: 'react-testing',           theme: 'primary',   title: search+'React Testing' },
    { page: 'cypress',                 theme: 'secondary', title: search+'Cypress' },
    null,
    { page: 'html',                    theme: 'html',      title: search+'HTML' },
    { page: 'css',                     theme: 'html',      title: search+'CSS' },
    { page: 'css-properties',          theme: 'html',      title: search+'CSS Props' },
    { page: 'css-flexbox',             theme: 'html',      title: search+'Flexbox' },
    { page: 'css-grid',                theme: 'html',      title: search+'CSS Grid' },
    { page: 'svg',                     theme: 'html',      title: search+'SVG' },
    { page: 'sass',                    theme: 'html',      title: 'Sass' },
    { page: 'bootstrap',               theme: 'secondary', title: 'Bootstrap' },
    { page: 'bem',                     theme: 'secondary', title: 'BEM' },
    null,
    { page: 'git',                     theme: 'tech',      title: search+accent+'Git' },
    { page: 'git-managers',            theme: 'tech',      title: search+'Git Repo' },
    { page: 'typescript',              theme: 'tech',      title: search+accent+'TypeScript' },
    { page: 'ide',                     theme: 'tech',      title: search+'IDE' },
    { page: 'linters',                 theme: 'tech',      title: search+'Linters' },
    { page: 'vite',                    theme: 'tech',      title: 'Vite' },
    { page: 'webpack',                 theme: 'primary',   title: search+'Webpack' },
    { page: 'npm',                     theme: 'primary',   title: search+'NPM | Yarn' },
    { page: 'cmd',                     theme: 'primary',   title: 'CMD' },
    null,
    { page: 'macos',                   theme: 'primary',   title: 'MacOS' },
    { page: 'windows',                 theme: 'primary',   title: 'Windows' },
    { page: 'linux',                   theme: 'primary',   title: 'Linux' },
    { page: 'software',                theme: 'secondary', title: 'Software' },
    { page: 'dayjs',                   theme: 'primary',   title: 'Day.js' },
    { page: 'ramda',                   theme: 'primary',   title: 'Ramda' },
    { page: 'lodash',                  theme: 'primary',   title: 'Lodash' },
    null,
    { page: 'blockchain',              theme: 'primary',   title: search+'Blockchain' },
    { page: 'python',                  theme: 'secondary', title: search+'Python' },
    { page: 'php',                     theme: 'secondary', title: search+'PHP' },
    { page: 'jquery',                  theme: 'secondary', title: search+'jQuery' },
    { page: 'mysql',                   theme: 'secondary', title: 'mySql' },
    { page: 'gulp',                    theme: 'secondary', title: search+'Gulp' },
    { page: 'parcel',                  theme: 'secondary', title: 'Parcel' },
    { page: 'flow',                    theme: 'secondary', title: search+'Flow' },
    { page: 'heroku',                  theme: 'secondary', title: 'Heroku' },
];
