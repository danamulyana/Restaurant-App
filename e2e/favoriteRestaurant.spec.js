/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
const assert = require('assert');

Feature('favorite Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', (I) => {
  I.seeElement('#catalog-data');
});
