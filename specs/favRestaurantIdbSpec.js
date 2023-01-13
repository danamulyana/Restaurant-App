import { itActsAsFavoriteRestaurantModel } from './contract/favRestaurantContract';
import FavRestoIdb from '../src/scripts/data/restaurant-db';

describe('Favorite Restorant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavRestoIdb.getAllResto()).forEach(async (resto) => {
      await FavRestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavRestoIdb);
});
