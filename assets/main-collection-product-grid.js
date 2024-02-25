class CustomGrid extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('click', this.buttonClicked);
    }

    buttonClicked(event) {
        console.log(event.target.classList.value);
        const buttonText = event.target.classList.value;
        var productGrid = document.querySelector('#product-grid');

        productGrid.classList.forEach(function (className) {
            if (className.endsWith('desktop')) {
                productGrid.classList.replace(className, `grid--${buttonText}-col-desktop`);
            }
        });

    }
}

customElements.define('custom-grid', CustomGrid);
