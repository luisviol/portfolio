class FooBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `                  <div class="dropdown-divider"></div>
             <footer class="footer mt-auto py-3 mt-3">
               <div class="d-flex justify-content-between">
                 <div>
                   <p>© 2024 Luis Villasmil</p>
                 </div>
                 <div class="social-links"><a href="https://www.linkedin.com/in/luisviol" target="_blank" rel="noopener noreferrer" class="mx-2" aria-label="LinkedIn Profile">
    <i class="fab fa-linkedin-in" aria-hidden="true"></i>
  </a>
  <a href="https://unsplash.com/es/@luisviol" target="_blank" rel="noopener noreferrer" class="mx-2" aria-label="Unsplash Profile">
    <i class="fab fa-unsplash" aria-hidden="true"></i>
  </a>
  <a href="mailto:luisviol22@gmail.com" class="mx-2" aria-label="Email Me">
    <i class="far fa-envelope" aria-hidden="true"></i>
  </a>
  <a href="https://dribbble.com/luisviol" target="_blank" rel="noopener noreferrer" class="ml-2" aria-label="Dribbble Profile">
    <i class="fab fa-dribbble" aria-hidden="true"></i>
  </a>
</div>
             </footer>`;
  }
}

window.customElements.define('foo-ter', FooBar);
