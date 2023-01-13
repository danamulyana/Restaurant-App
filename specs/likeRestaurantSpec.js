import FavRestoIdb from '../src/scripts/data/restaurant-db';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="LikeContainer"></div>';
};

describe('Liking Resto', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="favorite restoran ini"]'),
    ).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="hapus dari favorite restoran"]'),
    ).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavRestoIdb.getResto(1);
    expect(resto).toEqual({ id: 1 });

    await FavRestoIdb.deleteResto(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavRestoIdb.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const allResto = await FavRestoIdb.getAllResto();
    expect(allResto).toEqual([{ id: 1 }]);

    await FavRestoIdb.deleteResto(1);
  });
});
