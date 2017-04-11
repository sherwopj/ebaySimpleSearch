import { EbaySimpleSearchPage } from './app.po';

describe('ebay-simple-search App', () => {
  let page: EbaySimpleSearchPage;

  beforeEach(() => {
    page = new EbaySimpleSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
