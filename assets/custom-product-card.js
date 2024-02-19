class CustomProductCard extends HTMLElement {
    constructor() {
      super();
      console.log("hi");
  
      this.productHandle = this.dataset.productHandle;
      this.sectionId = this.dataset.sectionId;
      
      this.variantData = JSON.parse(this.querySelector('script').textContent);
      this.addEventListener('change', this.onVariantChange);
    }
  
  }
customElements.define('custom-product-card', CustomProductCard);