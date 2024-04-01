class customTimeline extends HTMLElement {
    constructor() {
        super();
        
        this.addEventListener( 'click', function() {
            console.log(this.querySelector(".timeline--year").innerHTML);
        });
    }
}

customElements.define('custom-timeline', customTimeline);
