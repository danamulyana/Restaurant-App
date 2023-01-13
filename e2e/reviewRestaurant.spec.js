const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post restaurant review', async ({ I }) => {
  const reviewText = 'DN Review Test';

  I.seeElement('article.catalog__card a');
  I.click(locate('.catalog__link').first());

  I.seeElement('.review-form form');
  I.fillField('#NameInput', 'DN E2E Testing');
  I.fillField('#ReviewInput', reviewText);
  I.click('#submit-review');

  I.waitForResponse('https://restaurant-api.dicoding.dev/review');
  const lastReview = locate('.review__detail-body').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
  assert.strictEqual(reviewText, lastReviewText.trim());
});
