import CONFIG from '../../globals/config';

const createItemTemplate = (restaurant) => `
    <article class="catalog__card" tabindex="0">
        <div class="catalog__rating">
            <svg tabindex="0" aria-label="Rating" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z"/>
            </svg>
            <p tabindex="0">${restaurant.rating}</p>
        </div>
        <img class="catalog__img" src="${CONFIG.IMAGE_SMALL + restaurant.pictureId}" alt="${restaurant.name}" loading="lazy">
        <div class="catalog__detail">
            <h1 class="catalog__title" tabindex="0">
                <a href="/#/detail/${restaurant.id}" class="catalog__link">${restaurant.name}</a>
            </h1>
            <div class="catalog__city">
                <svg tabindex="0" aria-label="Lokasi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                <p tabindex="0">${restaurant.city}</p> 
            </div>
            <p class="catalog__desc">${restaurant.description}</p>
        </div>
    </article>
`;

const reviewTamplate = (review) => `
    <article class="review__container" tabindex="0" aria-label="review">
        <img src="https://ui-avatars.com/api/?name=${review.name}&background=random" alt="image review ${review.name}" loading='lazy' />
        <div class="review__detail">
            <div class="review__detail-header">
                <p class="review__detail-header_name" tabindex="0">${review.name}</p>
                <p class="review__detail-header_date" tabindex="0">${review.date}</p>
            </div>
            <div class="review__detail-body" tabindex="0">
                ${review.review}
            </div>
        </div>
    </article>
`;

const DetailItemTamplate = (restaurant) => `
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

const loading = {
  show() {
    return `
        <section class="loading-container">
            <div class="loading">
                <div class="loader"></div>
                <div class="loading__panci">
                    <div class="loading__panci--pan"></div>
                    <div class="loading__panci--handle"></div>
                </div>
                <div class="loading__shadow"></div>
            </div>
        </section>
    `;
  },
  hide() {
    document.querySelector('.loading-container').remove();
  },
};

const createLikeButtonTemplate = () => `
  <button aria-label="favorite restoran ini" id="likeButton" class="like">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-balloon-heart" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/>
    </svg>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="hapus dari favorite restoran" id="likeButton" class="like">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
    </svg>
  </button>
`;

export {
  createItemTemplate,
  loading,
  DetailItemTamplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  reviewTamplate,
};
