import { NewAgePage } from './app.po';

describe('new-age App', function() {
  let page: NewAgePage;

  beforeEach(() => {
    page = new NewAgePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
