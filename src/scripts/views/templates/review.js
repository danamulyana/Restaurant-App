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

export default reviewTamplate;
