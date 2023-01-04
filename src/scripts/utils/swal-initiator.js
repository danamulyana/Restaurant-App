import Swal from 'sweetalert2';

const initSwalSuccess = (title) => {
  Swal.fire({
    title,
    icon: 'success',
    confirmButtonText: 'Ok',
  });
};

const initSwalError = (title) => {
  Swal.fire({
    title,
    icon: 'error',
    confirmButtonText: 'Ok',
  });
};

export { initSwalSuccess, initSwalError };
