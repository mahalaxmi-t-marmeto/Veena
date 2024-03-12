class customButton extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('click', this.onClick);
    }

    onClick()
    {
       document.querySelectorAll('.collection-title').forEach((element)=>
       {
        element.classList.remove("is-active")
       })
       this.querySelector('.collection-title').classList.add("is-active")
       console.log(this.querySelector(".is--active").innerHTML);
       this.querySelector(".is--active").innerHTML

    document.querySelector

    }

    
}

customElements.define('custom-button', customButton);