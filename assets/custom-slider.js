class CustomSlider extends HTMLElement {
    constructor() {
      super();
      this.sliderOptions = JSON.parse(this.dataset.sliderOptions);
      console.log(this.sliderOptions);
      this.mySplide = this.querySelector(".splide");
      this.options = this.sliderOptions;
      this.initSlider();
    }
    initSlider() {
      new Splide(this.mySplide, this.options).mount();
    }
  }
  
  customElements.define("custom-slider", CustomSlider);