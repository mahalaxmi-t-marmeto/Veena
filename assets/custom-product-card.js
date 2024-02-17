class CustomProductCard extends HTMLElement {
    constructor() {
      super();
      console.log("hi");
  
      this.productHandle = this.dataset.productHandle;
      this.sectionId = this.dataset.sectionId;
      
      this.variantData = JSON.parse(this.querySelector('script').textContent);
      this.addEventListener('change', this.onVariantChange);
    }
  
    onVariantChange() {
      this.selectedVariant = this.querySelector('[name="id"]').value;
      this.getCurrentVariant();
    }
  
    getCurrentVariant() {  
      this.currentVariant = this.variantData.find(variant => variant.id == this.selectedVariant);
      this.getUpdatedCard();
    }
  
    getUpdatedCard() {
      const url = `/products/${this.productHandle}?variant=${this.currentVariant.id}&section_id=${this.sectionId}`;
  
      fetch(url)
        .then((response) => response.text())
        .then((responseText) => {
          const html = new DOMParser().parseFromString(responseText, "text/html");
          this.innerHTML = html.querySelector(`[data-product-handle="${this.productHandle}"]`).innerHTML;
        });
    }
  }
customElements.define('custom-product-card', CustomProductCard);