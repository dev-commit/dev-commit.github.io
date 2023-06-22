
// THEME:
// green, blue, crimson, brown, violet, gray, white
// actual, accent
// none1, none2

const theory = '🪃 ';
const action = '🪙 ';

const ARR_LINKS = [
    { page: 'assessment',              theme: 'brown',    title: 'Ассессмент' },
    { page: 'js-task',                 theme: 'brown',    title: 'Задачи' },
    { page: 'compilation',             theme: 'gray',     title: '🔥' },
    { page: 'english',                 theme: 'gray',     title: theory+'English' },
    null,
    { page: 'theory-algoritms',        theme: 'accent',   title: 'Algorithms' },
    { page: 'theory-data-structures',  theme: 'accent',   title: 'Data Structures' },
    { page: 'theory-design-patterns',  theme: 'accent',   title: 'Design Patterns' },
    { page: 'theory-solid',            theme: 'accent',   title: 'SOLID' },
    { page: 'theory-paradigms',        theme: 'brown',    title: theory+'Парадигмы' },
    { page: 'blockchain',              theme: 'brown',    title: 'Blockchain' },
    null,
    { page: 'js',                      theme: 'green',    title: action+'JavaScript' },
    { page: 'js-promise',              theme: 'green',    title: 'Promise' },
    { page: 'js-class',                theme: 'green',    title: 'Class' },
    { page: 'js-object',               theme: 'green',    title: 'Object' },
    { page: 'js-array',                theme: 'green',    title: 'Array' },
    { page: 'js-function',             theme: 'green',    title: 'Function' },
    { page: 'js-regexp',               theme: 'green',    title: 'RegExp' },
    { page: 'js-web-api',              theme: 'green',    title: 'Web API' },
    null,
    { page: 'event-loop',              theme: 'blue',     title: 'Event Loop' },
    { page: 'theory-network',          theme: 'blue',     title: theory+'HTTP | Network' },
    { page: 'js-ajax',                 theme: 'blue',     title: 'Ajax | Tech' },
    null,
    { page: 'react-js',                theme: 'violet',   title: action+'React.js' },
    { page: 'redux',                   theme: 'violet',   title: action+'Redux' },
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
    { page: 'vue-js',                  theme: 'gray',     title: action+'Vue.js' },
    { page: 'vue-vuex',                theme: 'gray',     title: 'Vuex' },
    { page: 'vue-router',              theme: 'gray',     title: 'Vue Router' },
    { page: 'vue-cli',                 theme: 'gray',     title: 'Vue CLI' },
    { page: 'vue-plugins',             theme: 'gray',     title: 'Vue Plugins' },
    null,
    { page: 'testing',                 theme: 'brown',    title: theory+'Testing' },
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
    { page: 'bem',                     theme: 'green',    title: 'BEM' },
    null,
    { page: 'git',                     theme: 'crimson',  title: action+'Git' },
    { page: 'typescript',              theme: 'crimson',  title: action+'TypeScript' },
    { page: 'webpack',                 theme: 'crimson',  title: 'Webpack' },
    { page: 'npm',                     theme: 'brown',    title: 'NPM | Yarn' },
    { page: 'cmd',                     theme: 'brown',    title: 'CMD' },
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
