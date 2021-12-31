const { App } = require('regoch-web');
const viewsCached = require('../_cache/views.json');
const routes = require('./routes');

// conf
const $debugOpts = require('./conf/$debugOpts');

// controllers
const HomeCtrl = require('./controllers/HomeCtrl');


// app
const app = new App();
app
  .controllers([HomeCtrl])
  .viewsCached(viewsCached)
  .debugger($debugOpts)
  .routes(routes);
