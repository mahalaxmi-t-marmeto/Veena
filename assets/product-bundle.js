class ProductBundle extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('click', this.bundleAddtocart)
        this.sectionId = this.dataset.sectionId
    }


    bundleAddtocart() {
        console.log(this.querySelectorAll('.bundle-checkbox'));
        this.products = []
        this.querySelectorAll('.bundle-checkbox').forEach((element) => {
            if (element.checked == true) {
                console.log(element);
                this.products.push(element.value)
                console.log(this.products);
            }
        })

        const handleClick = () => {
            this.addToCart(this.products);
        };

        document.querySelector('#bundle__atc').addEventListener('click', handleClick);
    }

    addToCart(variants) {
        let cart=document.querySelector('cart-notification') || document.querySelector('cart-drawer');
        let formData = {
            "items": variants.map((variantId) =>
            (
                {
                    "id": variantId,
                    "quantity": 1,
                }
            )),
            "sections": cart.getSectionsToRender().map((section) => section.id)
        }
        console.log(formData);

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

customElements.define('product-bundle', ProductBundle);

