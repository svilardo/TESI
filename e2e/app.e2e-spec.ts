import { TESIPage } from './app.po';

describe('tesi App', () => {
  let page: TESIPage;

  beforeEach(() => {
    page = new TESIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
