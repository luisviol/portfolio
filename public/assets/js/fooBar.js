class FooBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `                  <div class="dropdown-divider"></div>
             <footer class="footer mt-auto py-3">
               <div class="d-flex justify-content-between">
                 <div>
                   <p>© 2024 Luis Villasmil</p>
                 </div>
                 <div><span class="mx-2"><i class="fab fa-linkedin-in"></i></span>
                   <span class="mx-2"><i class="fab fa-unsplash"></i></span>
                   <span class="mx-2"><i class="far fa-envelope"></i></span>
                   <span class="ml-2"><i class="fab fa-dribbble"></i></span></div>
               </div>
             </footer>`;
  }
}

window.customElements.define('foo-ter', FooBar);
