import { createStore, compose, applyMiddleware } from 'redux';
import mainReducer from './reducers/index';
import thunk from 'redux-thunk';

// Enable Redux Developer Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux Store
const store = createStore(
    mainReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;