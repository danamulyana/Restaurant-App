/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const assert = require('assert');

Feature('favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#catalog-data');
  I.see('Resto favorit kosong. Letakkan satu, dengan mengklik tombol hati di halaman detail.', '.catalog__noData');
});

Scenario('liking one restaurnat', async ({ I }) => {
  I.see('Resto favorit kosong. Letakkan satu, dengan mengklik tombol hati di halaman detail.', '.catalog__noData');

  I.amOnPage('/');
  I.seeElement('article.catalog__card');

  const firstRestoCard = locate('.catalog__link').first();
  const firstRestoCardTitle = await I.grabTextFrom(firstRestoCard);
  I.click(firstRestoCard);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('article.catalog__card');

  const likedCardTitle = await I.grabTextFrom('.catalog__link');
  assert.strictEqual(firstRestoCardTitle, likedCardTitle);
});
