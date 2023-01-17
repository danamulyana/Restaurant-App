import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavRestoIdb from '../../src/scripts/data/restaurant-db';

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#LikeContainer'),
    favRestoIdb: FavRestoIdb,
    data: {
      restaurant,
    },
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithResto };
