const { App } = require('regoch-web');
const viewsCached = require('../_cache/views.json');
const routes = require('./routes');

// conf
const $debugOpts = require('./conf/$debugOpts');

// controllers
const HomeCtrl = require('./controllers/HomeCtrl');
const Page1Ctrl = require('./controllers/Page1Ctrl');
const NotFoundCtrl = require('./controllers/NotFoundCtrl');


// app
const app = new App();
app
  .controllers([HomeCtrl, Page1Ctrl, NotFoundCtrl])
  .viewsCached(viewsCached)
  .debugger($debugOpts)
  .routes(routes);
