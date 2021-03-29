import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';


import StyleContext from 'isomorphic-style-loader/StyleContext';

const css = new Set(); // CSS for all rendered React components
const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));

export const render = (store, routes, req, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <StyleContext.Provider value={{ insertCss }}>
                    {renderRoutes(routes)}
                </StyleContext.Provider>

            </StaticRouter>
        </Provider>
    );
    const helmet = Helmet.renderStatic();

    return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <style>${[...css].join('\n')}</style>
            </head>
            <body>
            <div id='root'>${content}</div>
                <script>
                   window.context={
                       state:${JSON.stringify(store.getState())}
                   }
                </script>
                <script type="text/javascript" src="index.js"></script>
            </body>
        </html>`
        ;


}
