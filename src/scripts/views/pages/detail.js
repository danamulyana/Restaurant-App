import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { DetailItemTamplate, loading } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { initSwalError } from '../../utils/swal-initiator';
import PostReview from '../../utils/post-review';

const Detail = {
  async render() {
    return `
      ${loading.show()}
      <section class="section">
        <div class="container" id="detail-resto"></div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const data = await RestaurantSource.detailRestaurant(url.id);
      await loading.hide();
      const section = document.querySelector('#detail-resto');
      section.innerHTML += DetailItemTamplate(data.restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#LikeContainer'),
        data,
      });

      const btnSubmit = document.querySelector('#submit-review');
      const nameInput = document.querySelector('#NameInput');
      const ReviewInput = document.querySelector('#ReviewInput');

      btnSubmit.addEventListener('click', async (e) => {
        e.preventDefault();
        await PostReview(url, nameInput.value, ReviewInput.value);

        nameInput.value = '';
        ReviewInput.value = '';
      });
    } catch (error) {
      await loading.hide();
      initSwalError(error.message);
      throw new Error(error);
    }
  },
};

export default Detail;
