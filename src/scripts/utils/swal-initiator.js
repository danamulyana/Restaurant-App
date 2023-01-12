const initSwalSuccess = (title) => {
  import('sweetalert2')
    .then((module) => module.default)
    .then((swal) => {
      swal.fire({
        title,
        icon: 'success',
        confirmButtonText: 'Ok',
      });
    })
    .catch((err) => new Error(err));
};

const initSwalError = (title) => {
  import('sweetalert2')
    .then((module) => module.default)
    .then((swal) => {
      swal.fire({
        title,
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    })
    .catch((err) => new Error(err));
};

export { initSwalSuccess, initSwalError };
