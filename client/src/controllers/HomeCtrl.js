const { Controller } = require('regoch-web');


class HomeCtrl extends Controller {

  constructor(app) {
    super();
  }

  async loader(trx) {
    this.setTitle('Regoch Web Skeleton');
    this.setDescription('The Regoch Web Skeleton is the easiest way to start new Regoch Web App.');
    this.setKeywords('regoch, skell, app');
    this.setLang('en');

    await this.loadView('#layout', 'pages/home/layout.html');
    await this.loadViews([
      ['#main', 'pages/home/main.html']
    ], true);
  }

  async init() {
    this.$model.regochImageURL = '/assets/img/regoch.jpg';
  }

}



module.exports = HomeCtrl;
