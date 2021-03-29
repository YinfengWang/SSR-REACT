import express from 'express'
import { render } from './utils'
import { getStore } from '../store';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import routes from '../Routes';

const app = express();
app.use(express.static('public'))


app.use('/api', proxy('127.0.0.1:5000', {
  proxyReqPathResolver: function (req) {
    console.log('/SSRData/api' + req.url)
    return '/SSRData/api' + req.url;
  }
}));

app.get('*', function (req, res) {
  const store = getStore(req);

  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = [];

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      let promise = new Promise((resolve, reject) => { item.route.loadData(store).then(resolve).catch(resolve); })
      promises.push(promise);
    }
  })
  Promise.all(promises).then(data => {
    let context = {};
    const html = render(store, routes, req, context);
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    } else if (context.NOT_FOUND)
      res.status(404);
    res.send(html);
  })
});

var server = app.listen(2222, () => {
  console.log('Server is running at http://localhost:2222')
})