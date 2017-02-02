import { MallCliPage } from './app.po';

describe('mall-cli App', function() {
  let page: MallCliPage;

  beforeEach(() => {
    page = new MallCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
