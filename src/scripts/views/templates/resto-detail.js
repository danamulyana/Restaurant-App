import CONFIG from '../../globals/config';
import reviewTamplate from './review';

const DetailResto = (restaurant) => `
    <div class="Detail__restaurant">
        <section class="Detail__restaurant-init">
            <div class="Detail__restaurant-init_row">
                <img src="${CONFIG.IMAGE_MEDIUM + restaurant.pictureId}" alt="${restaurant.name}" loading="lazy" />
            </div>
            <div class="Detail__restaurant-init_row">
                <h1 class="Detail__restaurant-h1" tabindex="0">${restaurant.name}</h1>
                <div class="Detail__restaurant-init_categories" tabindex="0" aria-label="categories">
                    ${restaurant.categories.map((category) => `<span tabindex="0">${category.name}</span>`).join('')}
                </div>
                <div class="Detail__restaurant-init_ralo">
                    <div class="Detail__restaurant-init_ralo__rating">
                        <svg tabindex="0" aria-label="Rating" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z"/>
                        </svg>
                        <p tabindex="0">${restaurant.rating}</p> 
                    </div>
                    <div class="Detail__restaurant-init_ralo__location">
                        <svg tabindex="0" aria-label="Lokasi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                        <p tabindex="0">${restaurant.address}. ${restaurant.city}.</p> 
                    </div>
                </div>
                <div tabindex="0" aria-label="description">
                    <p tabindex="0">${restaurant.description}</p>
                </div>
            </div>
        </section>
        <section class="Detail__restaurant-menus">
            <h2 class="Detail__restaurant-h2" tabindex="0">Menus</h2>
            <div class="Detail__restaurant-menus-sec">
                <h3 class="Detail__restaurant-h3" tabindex="0">Foods</h3>
                <div class="Detail__restaurant-menus-foods">
                    ${restaurant.menus.foods.map((food) => `<span tabindex="0">${food.name}</span>`).join('')}
                </div>
                <h3 class="Detail__restaurant-h3" tabindex="0">Drinks</h3>
                <div class="Detail__restaurant-menus-drinks">
                    ${restaurant.menus.drinks.map((drink) => `<span tabindex="0">${drink.name}</span>`).join('')}
                </div>
            </div>
        </section>
        <section>
            <h2 class="Detail__restaurant-h2" tabindex="0">Reviews (${restaurant.customerReviews.length})</h2>
            <div class="review-form">
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" class="form-control" id="NameInput" minLength="3" placeholder="Your name..." required />
                    </div>
                    <div class="mb-3">
                        <label for="Review" class="form-label">Review</label>
                        <textarea type="text" class="form-control" id="ReviewInput" minLength="3" placeholder="Your review..." required></textarea>
                    </div>
                    <button class="button" type="submit" id="submit-review">Submit</button>
                </form>
            </div>
            <div class="review-section">
                ${restaurant.customerReviews.map((review) => reviewTamplate(review)).join('')}
            </div>
        </section>

        <div class="Detail__restaurant-favorite" id="LikeContainer"></div>
    </div>
`;

export default DetailResto;
