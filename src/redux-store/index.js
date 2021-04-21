import { createStore } from 'redux';
import mainReducer from './reducers/index';

// Create Redux Store
const store = createStore(
    mainReducer,
    // Enable Redux Developer Tools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;