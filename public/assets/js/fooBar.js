class FooBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `                  <div class="dropdown-divider"></div>
             <footer class="footer mt-auto py-3">
               <div class="d-flex justify-content-between">
                 <div>
                   <p>© 2020 Luis Villasmil - UX Designer</p>
                 </div>
                 <div><span class="mx-2">Linkedin</span>
                   <span class="mx-2">Unsplash</span>
                   <span class="mx-2">Email</span><span class="ml-2">Dribbble</span></div>
               </div>
             </footer>`;
  }
}

window.customElements.define('foo-ter', FooBar);
