import { EndlessRunnerPage } from './app.po';

describe('endless-runner App', () => {
  let page: EndlessRunnerPage;

  beforeEach(() => {
    page = new EndlessRunnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
