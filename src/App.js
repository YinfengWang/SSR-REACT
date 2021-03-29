import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header/';
import { actions } from './components/Header/store/'
const App = (props) => {
    return (
        <div>
            <Header></Header>
            {renderRoutes(props.route.routes)}
        </div>
    );
}
App.loadData = (state) => {
    return state.dispatch(actions.getLoginStatusAction())
}
export default App;
