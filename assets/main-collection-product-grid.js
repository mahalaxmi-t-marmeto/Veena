class CustomGrid extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('click', this.buttonClicked);
    }

    buttonClicked(event) {
        const buttonText = event.target.classList.value;
        var productGrid = document.querySelector('#product-grid');

        productGrid.classList.forEach(function (className) {
            if (className.endsWith('desktop')) {
                productGrid.classList.replace(className, `grid--${buttonText}-col-desktop`);
            }
        });

        productGrid.classList.forEach(function (className) {
            if (className.endsWith('down')) {
                if( buttonText== 2 || buttonText== 1)
                productGrid.classList.replace(className, `grid--${buttonText}-col-tablet-down`);
            }
        });

    }
}

customElements.define('custom-grid', CustomGrid);
