const { Controller, syslib } = require('regoch-web');


class NotFoundCtrl extends Controller {

  constructor(app) {
    super();
  }

  async loader(trx) {
    this.setTitle('404 - NotFound');
    this.setDescription('404 - NotFound');
    this.setKeywords('not found');
    this.setLang('en');

    await this.loadView('#layout', 'pages/notfound/layout.html');
    await this.loadView('#main', 'pages/notfound/main.html');
  }

  goHome() {
    syslib.navig.goto('/');
  }

}



module.exports = NotFoundCtrl;
