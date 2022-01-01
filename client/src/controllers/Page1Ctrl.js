const { Controller } = require('regoch-web');


class Page1Ctrl extends Controller {

  constructor(app) {
    super();
  }

  async loader(trx) {
    this.setTitle('Page1');
    this.setDescription('Some basic examples.');
    this.setKeywords('regoch, skell, app');
    this.setLang('en');

    await this.loadView('#layout', 'pages/page1/layout.html');
    await this.loadViews([
      ['#main', 'pages/page1/main.html']
    ], true);
  }

  async init() {
    this.$model.submitted = '';
  }


  async submit() {
    this.$model.submitted = this.$model.txt;
    await new Promise(r => setTimeout(r, 2100));
    this.$model.submitted = '';
  }

}



module.exports = Page1Ctrl;
