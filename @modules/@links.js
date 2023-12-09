
// THEME:
// green, blue, crimson, brown, violet, gray, white
// actual, accent
// none1, none2

const theory = '🪃 ';
const action = '⚾️ ';

const ARR_LINKS = [
    { page: 'js-task',                 theme: 'brown',    title: 'Задачи' },
    { page: 'compilation',             theme: 'gray',     title: '🔥' },
    { page: 'agile',                   theme: 'gray',     title: 'Agile | Jira' },
    { page: 'ci-cd',                   theme: 'gray',     title: 'CI / CD' },
    { page: 'mvc',                     theme: 'gray',     title: 'MVC ...' },
    { page: 'english',                 theme: 'gray',     title: 'English' },
    { page: 'wiki',                    theme: 'blue',     title: 'Wiki' },
    null,
    { page: 'theory-algoritms',        theme: 'accent',   title: 'Algorithms' },
    { page: 'theory-data-structures',  theme: 'accent',   title: 'Data Structures' },
    { page: 'theory-design-patterns',  theme: 'accent',   title: 'Design Patterns' },
    { page: 'theory-solid',            theme: 'accent',   title: 'SOLID' },
    { page: 'theory-paradigms',        theme: 'accent',   title: 'Парадигмы' },
    null,
    { page: 'js',                      theme: 'green',    title: action+'JavaScript' },
    { page: 'js-promise',              theme: 'green',    title: 'Promise' },
    { page: 'js-class',                theme: 'green',    title: 'Class' },
    { page: 'js-object',               theme: 'green',    title: 'Object' },
    { page: 'js-array',                theme: 'green',    title: 'Array' },
    { page: 'js-function',             theme: 'green',    title: 'Function' },
    { page: 'js-regexp',               theme: 'green',    title: 'RegExp' },
    { page: 'js-web-api',              theme: 'green',    title: 'Web API' },
    { page: 'canvas',                  theme: 'white',    title: 'Canvas' },
    { page: 'js-web-components',       theme: 'white',    title: 'WebComponents' },
    null,
    { page: 'event-loop',              theme: 'blue',     title: 'Event Loop | Optimize' },
    { page: 'theory-network',          theme: 'blue',     title: theory+'HTTP | Protocols' },
    { page: 'js-ajax',                 theme: 'blue',     title: 'Network | Ajax' },
    { page: 'auth',                    theme: 'blue',     title: 'Auth' },
    null,
    { page: 'react-js',                theme: 'violet',   title: action+'React.js' },
    { page: 'react-hooks',             theme: 'violet',   title: 'React Hooks' },
    { page: 'react-api',               theme: 'violet',   title: 'React API' },
    { page: 'react-router',            theme: 'violet',   title: 'React Router' },
    { page: 'material-ui',             theme: 'violet',   title: 'Material-UI' },
    { page: 'react-query',             theme: 'violet',   title: 'react-query' },
    { page: 'react-select',            theme: 'white',    title: 'react-select' },
    { page: 'react-use',               theme: 'white',    title: 'react-use' },
    { page: 'prop-types',              theme: 'white',    title: 'PropTypes' },
    null,
    { page: 'redux',                   theme: 'violet',   title: 'Redux' },
    { page: 'react-redux',             theme: 'violet',   title: 'React Redux' },
    { page: 'redux-toolkit',           theme: 'violet',   title: 'Redux Toolkit' },
    { page: 'redux-saga',              theme: 'violet',   title: 'Redux Saga' },
    { page: 'reselect',                theme: 'violet',   title: 'Reselect' },
    null,
    { page: 'formik',                  theme: 'violet',   title: 'Formik' },
    { page: 'yup',                     theme: 'violet',   title: 'Yup' },
    { page: 'react-hook-form',         theme: 'actual',   title: 'React Hook Form' },
    { page: 'react-final-form',        theme: 'white',    title: 'React Final Form' },
    null,
    { page: 'next-js',                 theme: 'violet',   title: 'Next.js' },
    { page: 'node-js',                 theme: 'blue',     title: 'Node.js' },
    { page: 'node-js-express',         theme: 'blue',     title: 'Express' },
    { page: 'nest-js',                 theme: 'blue',     title: 'Nest.js' },
    { page: 'mongodb',                 theme: 'actual',   title: 'MongoDB' },
    { page: 'react-native',            theme: 'actual',   title: 'React Native' },
    null,
    { page: 'vue-js',                  theme: 'crimson',  title: action+'Vue.js' },
    { page: 'vue-vuex',                theme: 'white',    title: 'Vuex' },
    { page: 'vue-router',              theme: 'white',    title: 'Vue Router' },
    { page: 'vue-cli',                 theme: 'white',    title: 'Vue CLI' },
    { page: 'vue-plugins',             theme: 'white',    title: 'Vue Plugins' },
    null,
    { page: 'testing',                 theme: 'brown',    title: theory+'Testing' },
    { page: 'jest',                    theme: 'brown',    title: 'Jest' },
    { page: 'enzyme',                  theme: 'brown',    title: 'Enzyme + Jest' },
    { page: 'react-testing',           theme: 'brown',    title: 'React Testing' },
    { page: 'cypress',                 theme: 'white',    title: 'Cypress' },
    null,
    { page: 'html',                    theme: 'green',    title: 'HTML' },
    { page: 'css',                     theme: 'green',    title: 'CSS' },
    { page: 'css-properties',          theme: 'green',    title: 'CSS props' },
    { page: 'css-flexbox',             theme: 'green',    title: 'Flexbox' },
    { page: 'css-grid',                theme: 'green',    title: 'CSS Grid' },
    { page: 'svg',                     theme: 'green',    title: 'SVG' },
    { page: 'sass',                    theme: 'green',    title: 'Sass' },
    { page: 'bootstrap',               theme: 'green',    title: 'Bootstrap' },
    { page: 'bem',                     theme: 'green',    title: 'BEM' },
    null,
    { page: 'git',                     theme: 'crimson',  title: action+'Git' },
    { page: 'git-managers',            theme: 'crimson',  title: 'GitHub ...' },
    { page: 'typescript',              theme: 'crimson',  title: action+'TypeScript' },
    { page: 'ide',                     theme: 'crimson',  title: 'IDE' },
    { page: 'linters',                 theme: 'crimson',  title: 'Linters' },
    { page: 'vite',                    theme: 'crimson',  title: 'Vite' },

    { page: 'webpack',                 theme: 'brown',    title: 'Webpack' },
    { page: 'npm',                     theme: 'brown',    title: 'NPM | Yarn' },
    { page: 'cmd',                     theme: 'brown',    title: 'CMD' },
    { page: 'dayjs',                   theme: 'brown',    title: 'Day.js' },
    { page: 'ramda',                   theme: 'brown',    title: 'Ramda' },
    { page: 'lodash',                  theme: 'brown',    title: 'Lodash' },

    { page: 'blockchain',              theme: 'brown',    title: 'Blockchain' },
    null,
    { page: 'macos',                   theme: 'green',    title: 'MacOS' },
    { page: 'windows',                 theme: 'green',    title: 'Windows' },
    { page: 'linux',                   theme: 'green',    title: 'Linux' },
    { page: 'python',                  theme: 'white',    title: 'Python' },
    { page: 'php',                     theme: 'white',    title: 'PHP' },
    { page: 'jquery',                  theme: 'white',    title: 'jQuery' },
    { page: 'mysql',                   theme: 'white',    title: 'mySql' },
    { page: 'gulp',                    theme: 'white',    title: 'Gulp' },
    { page: 'parcel',                  theme: 'white',    title: 'Parcel' },
    { page: 'flow',                    theme: 'white',    title: 'Flow' },
    { page: 'heroku',                  theme: 'white',    title: 'Heroku' },
];
