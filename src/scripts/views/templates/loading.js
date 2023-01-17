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

export default loading;
