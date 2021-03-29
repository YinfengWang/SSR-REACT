import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from '../Routes';
import { Provider } from 'react-redux';
import { getClientStore } from '../store'
import { renderRoutes } from 'react-router-config';

import StyleContext from 'isomorphic-style-loader/StyleContext';

const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss());
    return () => removeCss.forEach(dispose => dispose());
};

const store = getClientStore();

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <StyleContext.Provider value={{ insertCss }}>
                    {renderRoutes(routes)}
                </StyleContext.Provider>
            </BrowserRouter>
        </Provider>
    )
}
ReactDom.hydrate(<App></App>, document.getElementById('root'))