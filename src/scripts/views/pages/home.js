import RestaurantSource from '../../data/restaurant-source';
import { createItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="catalog section">
            <section id="Hero" class="hero">
                <img src="images/heros/hero-image_2.jpg" alt="Hero Image" class="hero__img" loading='lazy'>
                <div class="hero__container container grid">
                <div class="hero__data">
                    <h1 class="hero__data-subtitle" tabindex="0">temukan restoran di kota Anda</h1>
                    <h2 class="hero__data-title" tabindex="0">temukan<br> makanan dan minuman <strong>terbaik</strong></h2>
                    <a href="#" class="button">Temukan</a>
                </div>
                <div class="hero__social"></div>
                </div>
            </section>
            <h2 class="section__title" tabindex="0">Jelajahi Restoran Terdekat</h2>
            <div class="catalog__container container grid" id="catalog-data">
                
            </div>
        </section>`;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurant();
    const restaurantContainer = document.querySelector('#catalog-data');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createItemTemplate(restaurant);
    });
  },
};

export default Home;
