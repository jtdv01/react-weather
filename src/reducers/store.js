import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './index';
import env from '../env';

var middlewares = compose(
    applyMiddleware(thunk)
)

if(env === 'dev'){
    console.log("Redux tools enabled via dev env");
    middlewares = compose(middlewares,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}

const store = createStore(reducers, middlewares);
export default store;