import { createStore } from 'redux';
import rootReducer from './reducers'

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();

export default createStore(rootReducer, devtoolMiddleware);
