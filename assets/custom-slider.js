class CustomSlider extends HTMLElement {
    constructor() {
      super();
      console.log("hi");
      this.mySplide = this.querySelector(".splide");
      console.log(this.querySelector("#splideProperties").textContent);
      this.options = JSON.parse(this.querySelector("#splideProperties").textContent);
      console.log(this.options);
      this.initSlider();
    }
  
    initSlider() {
      new Splide(this.mySplide, this.options).mount();
    }
  }
  
  customElements.define("custom-slider", CustomSlider);