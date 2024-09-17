
// THEME:
// green, blue, crimson, brown, violet, gray, white
// actual, accent
// none1, none2

const theory = '📑 ';
const action = '🍧 ';
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

const ARR_LINKS = [
    { page: 'network',                    theme: 'blue',     title: 'Network' },

    { page: 'js-task',                 theme: 'brown ',   title: search+'Задачи' },
    { page: 'compilation',             theme: 'gray',     title: '🍧' },
    { page: 'agile',                   theme: 'gray',     title: 'Agile | Jira' },
    { page: 'ci-cd',                   theme: 'gray',     title: 'CI / CD' },
    { page: 'mvc',                     theme: 'gray',     title: 'MVC ...' },
    { page: 'english',                 theme: 'gray',     title: 'English' },
    { page: 'wiki',                    theme: 'blue',     title: 'Wiki' },
    null,
    { page: 'theory-algoritms',        theme: 'accent',   title: search+'Algorithms' },
    { page: 'theory-data-structures',  theme: 'accent',   title: search+'Data Structures' },
    { page: 'theory-design-patterns',  theme: 'accent',   title: search+'Design Patterns' },
    { page: 'theory-solid',            theme: 'accent',   title: 'SOLID' },
    { page: 'theory-paradigms',        theme: 'accent',   title: search+'Парадигмы' },
    { page: 'theory-refactoring',      theme: 'accent',   title: 'Refactoring' },
    null,
    { page: 'js',                      theme: 'green',    title: search+action+'JavaScript' },
    { page: 'js-promise',              theme: 'green',    title: search+'Promise' },
    { page: 'js-class',                theme: 'green',    title: search+'Class' },
    { page: 'js-object',               theme: 'green',    title: search+'Object' },
    { page: 'js-array',                theme: 'green',    title: 'Array' },
    { page: 'js-string',               theme: 'green',    title: 'String' },
    { page: 'js-function',             theme: 'green',    title: search+'Function' },
    { page: 'js-regexp',               theme: 'green',    title: 'RegExp' },
    { page: 'js-web-api',              theme: 'green',    title: search+'Web API' },
    { page: 'canvas',                  theme: 'white',    title: 'Canvas' },
    { page: 'js-web-components',       theme: 'white',    title: search+'WebComponents' },
    null,
    { page: 'event-loop',              theme: 'blue',     title: search+'Event Loop | Optimize' },
    { page: 'theory-network',          theme: 'blue',     title: search+theory+'HTTP | Protocols' },
    { page: 'js-ajax',                 theme: 'blue',     title: 'Ajax' },
    { page: 'auth',                    theme: 'blue',     title: search+'Auth' },

    null,
    { page: 'react-js',                theme: 'violet',   title: search+action+'React.js' },
    { page: 'react-hooks',             theme: 'violet',   title: 'React Hooks' },
    { page: 'react-api',               theme: 'violet',   title: search+'React API' },
    { page: 'react-router',            theme: 'violet',   title: search+'React Router' },
    { page: 'material-ui',             theme: 'violet',   title: search+'MUI' },
    { page: 'reactflow',               theme: 'violet',   title: search+'React Flow' },
    { page: 'react-query',             theme: 'violet',   title: 'react-query' },
    { page: 'react-select',            theme: 'white',    title: 'react-select' },
    { page: 'react-use',               theme: 'white',    title: 'react-use' },
    { page: 'prop-types',              theme: 'white',    title: 'PropTypes' },
    null,
    { page: 'redux',                   theme: 'violet',   title: search+'Redux' },
    { page: 'react-redux',             theme: 'violet',   title: search+'React Redux' },
    { page: 'redux-toolkit',           theme: 'violet',   title: search+'Redux Toolkit' },
    { page: 'redux-saga',              theme: 'violet',   title: search+'Redux Saga' },
    { page: 'reselect',                theme: 'violet',   title: 'Reselect' },
    null,
    { page: 'formik',                  theme: 'violet',   title: search+'Formik' },
    { page: 'yup',                     theme: 'violet',   title: 'Yup' },
    { page: 'react-hook-form',         theme: 'actual',   title: 'React Hook Form' },
    { page: 'react-final-form',        theme: 'white',    title: 'React Final Form' },
    null,
    { page: 'next-js',                 theme: 'violet',   title: search+'Next.js' },
    { page: 'node-js',                 theme: 'blue',     title: search+'Node.js' },
    { page: 'node-js-express',         theme: 'blue',     title: search+'Express' },
    { page: 'nest-js',                 theme: 'blue',     title: search+'Nest.js' },
    { page: 'mongodb',                 theme: 'actual',   title: 'MongoDB' },
    { page: 'react-native',            theme: 'actual',   title: 'React Native' },
    null,
    { page: 'vue-js',                  theme: 'crimson',  title: search+action+'Vue.js' },
    { page: 'vuepress',                theme: 'crimson',  title: search+'VuePress' },
    { page: 'vue-vuex',                theme: 'white',    title: search+'Vuex' },
    { page: 'vue-router',              theme: 'white',    title: search+'Vue Router' },
    { page: 'vue-cli',                 theme: 'white',    title: 'Vue CLI' },
    { page: 'vue-plugins',             theme: 'white',    title: 'Vue Plugins' },
    null,
    { page: 'testing',                 theme: 'brown',    title: search+theory+'Testing' },
    { page: 'jest',                    theme: 'brown',    title: search+'Jest' },
    { page: 'enzyme',                  theme: 'brown',    title: search+'Enzyme + Jest' },
    { page: 'react-testing',           theme: 'brown',    title: search+'React Testing' },
    { page: 'cypress',                 theme: 'white',    title: search+'Cypress' },
    null,
    { page: 'html',                    theme: 'green',    title: search+'HTML' },
    { page: 'css',                     theme: 'green',    title: search+'CSS' },
    { page: 'css-properties',          theme: 'green',    title: search+'CSS props' },
    { page: 'css-flexbox',             theme: 'green',    title: search+'Flexbox' },
    { page: 'css-grid',                theme: 'green',    title: search+'CSS Grid' },
    { page: 'svg',                     theme: 'green',    title: search+'SVG' },
    { page: 'sass',                    theme: 'green',    title: search+'Sass' },
    { page: 'bootstrap',               theme: 'green',    title: 'Bootstrap' },
    { page: 'bem',                     theme: 'green',    title: 'BEM' },
    null,
    { page: 'git',                     theme: 'crimson',  title: search+action+'Git' },
    { page: 'git-managers',            theme: 'crimson',  title: search+'GitHub ...' },
    { page: 'typescript',              theme: 'crimson',  title: search+action+'TypeScript' },
    { page: 'ide',                     theme: 'crimson',  title: search+'IDE' },
    { page: 'linters',                 theme: 'crimson',  title: search+'Linters' },
    { page: 'vite',                    theme: 'crimson',  title: 'Vite' },
    { page: 'webpack',                 theme: 'brown',    title: search+'Webpack' },
    { page: 'npm',                     theme: 'brown',    title: search+'NPM | Yarn' },
    { page: 'cmd',                     theme: 'brown',    title: 'CMD' },
    { page: 'dayjs',                   theme: 'brown',    title: 'Day.js' },
    { page: 'ramda',                   theme: 'brown',    title: 'Ramda' },
    { page: 'lodash',                  theme: 'brown',    title: 'Lodash' },
    { page: 'blockchain',              theme: 'brown',    title: search+'Blockchain' },
    null,
    { page: 'macos',                   theme: 'green',    title: 'MacOS' },
    { page: 'windows',                 theme: 'green',    title: 'Windows' },
    { page: 'linux',                   theme: 'green',    title: 'Linux' },
    { page: 'applications',            theme: 'green',    title: 'Applications' },
    { page: 'python',                  theme: 'white',    title: search+'Python' },
    { page: 'php',                     theme: 'white',    title: search+'PHP' },
    { page: 'jquery',                  theme: 'white',    title: search+'jQuery' },
    { page: 'mysql',                   theme: 'white',    title: search+'mySql' },
    { page: 'gulp',                    theme: 'white',    title: search+'Gulp' },
    { page: 'parcel',                  theme: 'white',    title: 'Parcel' },
    { page: 'flow',                    theme: 'white',    title: search+'Flow' },
    { page: 'heroku',                  theme: 'white',    title: 'Heroku' },
];
