  class customText extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('click', this.onCopy);
    }

    onCopy()
    {
    
    let copyText = this.querySelector("#copyField");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(copyText.value);
  
    let buttonText=this.querySelector('#copy_button')
    buttonText.innerHTML="Copied"
    setTimeout(() => {
    buttonText.innerHTML="Copy Code"
    }, 2000);
    }
    
}

customElements.define('custom-text', customText);
