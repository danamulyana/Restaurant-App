/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const assert = require('assert');

Feature('favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const nodataCondition = 'Resto favorit kosong. Letakkan satu, dengan mengklik tombol hati di halaman detail.';

Scenario('showing empty favorite restaurants', ({ I }) => {
  I.seeElement('#catalog-data');
  I.see(nodataCondition, '.catalog__noData');
});

Scenario('liking and unliking one restaurant', async ({ I }) => {
  // Like Restaurant
  I.see(nodataCondition, '.catalog__noData');

  I.amOnPage('/');

  I.seeElement('article.catalog__card');

  const firstRestoCard = locate('.catalog__link').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  I.wait(2);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('article.catalog__card');

  const likedCardTitle = await I.grabTextFrom('.catalog__link');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);

  // unlike
  I.wait(3);

  I.click(firstRestoCard);

  I.wait(3);

  I.seeElement('#likeButton');

  I.wait();

  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#catalog-data');

  const unFavoriteResto = await I.grabTextFrom('.catalog__noData');
  assert.strictEqual(unFavoriteResto, nodataCondition);
});
