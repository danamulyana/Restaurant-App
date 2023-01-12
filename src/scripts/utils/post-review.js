import RestaurantSource from '../data/restaurant-source';
import reviewTamplate from '../views/templates/review';
import { initSwalError } from './swal-initiator';

const PostReview = async (url, name, review) => {
  try {
    const dataInput = {
      id: url.id,
      name,
      review,
    };

    const date = new Date().toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const reviewContainer = document.querySelector('.review-section');

    await RestaurantSource.postReview(dataInput);

    reviewContainer.innerHTML += reviewTamplate({
      date,
      name,
      review,
    });
  } catch (err) {
    initSwalError(err.message);
    throw new Error(err);
  }
};

export default PostReview;
