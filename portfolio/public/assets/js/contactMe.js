class ContactMe extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
<div class="dropdown-divider mb-5"></div>
    <section class="mt-4 mb-4 animate__animated animate__fadeInUp"><div class="card">

               <div class="card-body">
                 <h5 class="clear-text">Get in touch</h5>
                 <p>Feel free to reach out anytime to chat and exchange ideas!</p>
                 <a href="mailto:luisviol22@gmail.com" class="main-action btn btn-dark">Email me</a>
               </div>
             </div>
      </section>`;
  }
}

window.customElements.define('contact-me', ContactMe);
