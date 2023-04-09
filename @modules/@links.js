
// THEME: green, blue, crimson, brown, violet, gray, white, actual, accent

const ARR_LINKS = [
    { page: 'assessment',              theme: 'brown',    title: 'Ассессмент' },
    { page: 'js-task',                 theme: 'brown',    title: 'Задачи' },
    { page: 'compilation',             theme: 'gray',     title: '🦄' },
    { page: 'english',                 theme: 'gray',     title: '📑 English' },
    null,
    { page: 'theory-algoritms',        theme: 'accent',   title: 'Algorithms' },
    { page: 'theory-data-structures',  theme: 'accent',   title: 'Data Structures' },
    { page: 'theory-design-patterns',  theme: 'accent',   title: 'Design Patterns' },
    { page: 'theory-paradigms',        theme: 'brown',    title: '📑 Парадигмы' },
    null,
    { page: 'event-loop',              theme: 'blue',     title: '⭐️ Event Loop' },
    { page: 'js-promise',              theme: 'blue',     title: 'Promise' },
    { page: 'js-class',                theme: 'blue',     title: 'Class' },
    { page: 'js-object',               theme: 'blue',     title: 'Object' },
    { page: 'js-array',                theme: 'blue',     title: 'Array' },
    { page: 'js-function',             theme: 'blue',     title: 'Function' },
    { page: 'js-regexp',               theme: 'blue',     title: 'RegExp' },
    null,
    { page: 'js',                      theme: 'green',    title: '⚪️ JavaScript' },
    { page: 'js-web-api',              theme: 'green',    title: 'Web API' },
    { page: 'js-network',              theme: 'brown',    title: '⚪️ Network' },
    null,
    { page: 'react-js',                theme: 'violet',   title: '⚪️ React.js' },
    { page: 'redux',                   theme: 'violet',   title: '⚪️ Redux' },
    { page: 'react-hooks',             theme: 'violet',   title: 'React Hooks' },
    { page: 'react-api',               theme: 'violet',   title: 'React API' },
    { page: 'react-router',            theme: 'violet',   title: 'React Router' },
    { page: 'next-js',                 theme: 'blue',     title: 'Next.js' },
    { page: 'react-native',            theme: 'actual',   title: 'React Native' },
    null,
    { page: 'formik',                  theme: 'crimson',  title: 'Formik' },
    { page: 'react-final-form',        theme: 'crimson',  title: 'React Final Form' },
    { page: 'yup',                     theme: 'crimson',  title: 'Yup' },
    { page: 'reselect',                theme: 'crimson',  title: 'Reselect' },
    { page: 'prop-types',              theme: 'crimson',  title: 'PropTypes' },
    { page: 'material-ui',             theme: 'gray',     title: 'Material-UI' },
    { page: 'jss',                     theme: 'gray',     title: 'JSS' },
    null,
    { page: 'react-query',             theme: 'crimson',  title: 'react-query' },
    { page: 'react-use',               theme: 'crimson',  title: 'react-use' },
    { page: 'dayjs',                   theme: 'brown',    title: 'Day.js' },
    { page: 'ramda',                   theme: 'white',    title: 'Ramda' },
    { page: 'lodash',                  theme: 'white',    title: 'Lodash' },
    null,
    { page: 'node-js',                 theme: 'blue',    title: 'Node.js' },
    { page: 'node-js-express',         theme: 'blue',    title: 'Express' },
    { page: 'mongodb',                 theme: 'actual',  title: 'MongoDB' },
    { page: 'jwt',                     theme: 'actual',  title: 'JWT' },
    { page: 'nest-js',                 theme: 'blue',    title: 'Nest.js' },
    null,
    { page: 'vue-js',                  theme: 'gray',     title: '⚪️ Vue.js' },
    { page: 'vue-vuex',                theme: 'gray',     title: 'Vuex' },
    { page: 'vue-router',              theme: 'gray',     title: 'Vue Router' },
    { page: 'vue-cli',                 theme: 'gray',     title: 'Vue CLI' },
    { page: 'vue-plugins',             theme: 'gray',     title: 'Vue Plugins' },
    null,
    { page: 'testing',                 theme: 'brown',    title: '📑 Testing' },
    { page: 'jest',                    theme: 'brown',    title: 'Jest' },
    { page: 'enzyme',                  theme: 'brown',    title: 'Enzyme + Jest' },
    { page: 'react-testing',           theme: 'brown',    title: 'React Testing' },
    { page: 'cypress',                 theme: 'gray',     title: 'Cypress' },
    null,
    { page: 'html',                    theme: 'green',    title: 'HTML' },
    { page: 'css',                     theme: 'green',    title: 'CSS' },
    { page: 'css-flexbox',             theme: 'green',    title: 'Flexbox' },
    { page: 'css-grid',                theme: 'green',    title: 'CSS Grid' },
    { page: 'svg',                     theme: 'green',    title: 'SVG' },
    { page: 'sass',                    theme: 'green',    title: 'Sass' },
    { page: 'bootstrap',               theme: 'green',    title: 'Bootstrap' },
    { page: 'bem',                     theme: 'green',    title: 'БЭМ' },
    null,
    { page: 'git',                     theme: 'crimson',  title: '⭐️ Git' },
    { page: 'typescript',              theme: 'crimson',  title: '⭐️ TypeScript' },
    { page: 'webpack',                 theme: 'crimson',  title: 'Webpack' },
    { page: 'npm',                     theme: 'brown',    title: 'NPM | Yarn' },
    { page: 'terminal',                theme: 'brown',    title: 'Terminal' },
    { page: 'gulp',                    theme: 'gray',     title: 'Gulp' },
    { page: 'parcel',                  theme: 'white',    title: 'Parcel' },
    { page: 'flow',                    theme: 'gray',     title: 'Flow' },
    { page: 'heroku',                  theme: 'gray',     title: 'Heroku' },
    null,
    { page: 'ide',                     theme: 'blue',     title: 'IDE' },
    { page: 'linux',                   theme: 'brown',    title: 'Linux' },
    { page: 'js-web-components',       theme: 'gray',     title: 'WebComponents' },
    { page: 'canvas',                  theme: 'gray',     title: 'Canvas' },
    { page: 'jquery',                  theme: 'gray',     title: 'jQuery' },
    { page: 'php',                     theme: 'gray',     title: 'PHP' },
    { page: 'python',                  theme: 'gray',     title: 'Python' },
    { page: 'mysql',                   theme: 'gray',     title: 'mySql' },
    { page: 'wiki',                    theme: 'blue',     title: 'Wiki' },
];
