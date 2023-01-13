/* eslint-disable no-useless-return */
import { itActsAsFavoriteRestaurantModel } from './contract/favRestaurantContract';

let favoriteRestos = [];

const favoriteRestaurantArray = {

  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestos.find((restaurant) => restaurant.id === id);
  },

  getAllResto() {
    return favoriteRestos;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(resto.id)) {
      return;
    }

    favoriteRestos.push(resto);
  },

  deleteResto(id) {
    favoriteRestos = favoriteRestos.filter((resto) => resto.id !== id);
  },
};

describe('Favorite resto array contract test', () => {
  // eslint-disable-next-line no-undef, no-return-assign, no-const-assign
  afterEach(() => (favoriteRestos = []));

  itActsAsFavoriteRestaurantModel(favoriteRestaurantArray);
});
