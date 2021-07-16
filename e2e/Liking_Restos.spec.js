const assert = require('assert');

Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.see('Halaman Favorite Masih Kosong!,', '.empty-tag');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Halaman Favorite Masih Kosong!,', '.empty-tag');

  I.amOnPage('/');

  I.seeElement('.post-item__title a');
  const firstResto = locate('.post-item__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.post-item');

  const likedRestoTitle = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Feature('Unliking Restos');

Scenario('unliking one resto', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.post-item__title a');
  I.click(locate('.post-item__title a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('.post-item__title a');
  I.click(locate('.post-item__title a'));
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.see('Halaman Favorite Masih Kosong!,', '.empty-tag');
});
