import 'regenerator-runtime'; /* for async await transpile */
import '../scss/main.scss';
import dataResto from "../DATA.json"
import Header from "./Header";

const listRestaurant = data => {
    const catalogElem = document.querySelector('#catalog-data');
    catalogElem.innerHTML = '';

    data.restaurants.map((resto) => {
        const {id,name,description,pictureId,city,rating} = resto;

        catalogElem.innerHTML += `
        <article class="catalog__card" tabindex="0">
            <div class="catalog__rating">
            <svg tabindex="0" aria-label="Rating" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z"/>
            </svg>
            <p tabindex="0">${rating}</p>
            </div>
            <img class="catalog__img" src="${pictureId}" alt="${name}" loading="lazy">
            <div class="catalog__detail">
            <h1 class="catalog__title" tabindex="0">${name}</h1>
            <div class="catalog__city">
                <svg tabindex="0" aria-label="Lokasi" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                <p tabindex="0">${city}</p> 
            </div>
            <p class="catalog__desc">${description}</p>
            </div>
        </article>
        `;
    })
}

listRestaurant(dataResto);

Header();