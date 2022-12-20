import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { loading } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section class="section">
        ${loading.show()}
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    await loading.hide();
    console.log(restaurant);
  },
};

export default Detail;
