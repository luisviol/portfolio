class ContactMe extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
<div class="dropdown-divider mb-5"></div>
    <section class="mt-4 mb-4 animate__animated animate__fadeInUp"><div class="card">

               <div class="card-body">
                 <h5 class="card-title">Let's keep in touch</h5>
                 <p class="card-text">At the moment I am only available for consulting, but I am always available to chat and share ideas.</p>
                 <a href="mailto:luisviol22@gmail.com" class="btn btn-primary">Email me</a>
               </div>
             </div>
      </section>`;
  }
}

window.customElements.define('contact-me', ContactMe);
