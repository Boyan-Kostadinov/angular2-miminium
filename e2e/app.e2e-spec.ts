import { Angular2MiminiumPage } from './app.po';

describe('angular2-miminium App', function() {
  let page: Angular2MiminiumPage;

  beforeEach(() => {
    page = new Angular2MiminiumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
