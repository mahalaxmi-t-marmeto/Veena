class addToCart extends HTMLElement {
    constructor() {
        super();

        console.log(this);
        this.addEventListener('click', this.addtocart)
        this.sectionId =this.dataset.sectionId
    }

    addtocart() {
        let cart=document.querySelector('cart-notification') || document.querySelector('cart-drawer');
        let cartQty=document.querySelector(`#Quantity-${this.sectionId}`).value

        let formData = {
            "quantity": cartQty,
            "id": this.dataset.variantId,
            "product-id": this.dataset.productId,
            "section-id": this.dataset.sectionId,
            "sections": cart.getSectionsToRender().map((section) => section.id),
            "sections_url": window.location.pathname,
        };

        fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                return response.json();
            })
            .then(response=>
                {
                    cart.renderContents(response);
                })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

customElements.define('add-to-cart', addToCart);

