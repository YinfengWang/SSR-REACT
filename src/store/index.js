import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as headerReducer } from '../components/Header/store';
import { reducer as homeReducer } from '../containers/Home/store';
import { reducer as translationReducer } from '../containers/Translation/store';
import clientAxios from '../client/request';
import serverAxios from '../server/request';

const reducer = combineReducers({
    home: homeReducer,
    header: headerReducer,
    translation: translationReducer
})

export const getClientStore = () => {
    const dafaultState = window.context.state;
    return createStore(reducer, dafaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
}
export const getStore = (req) => {
    return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios(req))));
}
