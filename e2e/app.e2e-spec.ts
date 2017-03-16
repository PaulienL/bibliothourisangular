import { NewtestbiblioPage } from './app.po';

describe('newtestbiblio App', () => {
  let page: NewtestbiblioPage;

  beforeEach(() => {
    page = new NewtestbiblioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
