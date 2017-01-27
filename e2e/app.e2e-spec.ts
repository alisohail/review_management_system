import { ReviewsAppPage } from './app.po';

describe('reviews-app App', function() {
  let page: ReviewsAppPage;

  beforeEach(() => {
    page = new ReviewsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
