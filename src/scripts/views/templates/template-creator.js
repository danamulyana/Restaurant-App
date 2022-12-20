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
                <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
            </h1>
            <div class="catalog__city">
                <svg tabindex="0" aria-label="Lokasi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                <p tabindex="0">${restaurant.city}</p> 
            </div>
            <p class="catalog__desc">${restaurant.description}</p>
        </div>
    </article>
`;

const loading = {
  show() {
    return `
        <section class="loading">
            <div class="loader"></div>
            <div class="loading__panci">
                <div class="loading__panci--pan"></div>
                <div class="loading__panci--handle"></div>
            </div>
            <div class="loading__shadow"></div>
        </section>
    `;
  },
  hide() {
    document.querySelector('.loading').remove();
  },
};

export {
  createItemTemplate,
  loading,
};
