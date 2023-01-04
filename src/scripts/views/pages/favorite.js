import FavRestoIdb from '../../data/restaurant-db';
import { initSwalError } from '../../utils/swal-initiator';
import { createItemTemplate, loading } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        ${loading.show()}
        <section class="section">
            <h2 class="section__title" tabindex="0">Jelajahi Restoran Favorite Anda</h2>
            <div class="container" id="catalog-data">
                
            </div>
        </section>
        `;
  },

  async afterRender() {
    try {
      const data = await FavRestoIdb.getAllResto();
      const restaurantContainer = document.querySelector('#catalog-data');

      loading.hide();

      if (data.length !== 0) {
        restaurantContainer.classList.add('grid');
        restaurantContainer.classList.add('catalog__container');
        data.forEach((resto) => {
          restaurantContainer.innerHTML += createItemTemplate(resto);
        });

        return;
      }

      restaurantContainer.innerHTML = '<p class="catalog__noData">Resto favorit kosong. Letakkan satu, dengan mengklik tombol hati di halaman detail.</p>';
    } catch (err) {
      await loading.hide();
      initSwalError(err.message);
      throw new Error(err);
    }
  },
};

export default Favorite;
