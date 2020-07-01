class NavBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `         <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#">Luis Villasmil</a>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse justify-content-end collapse" id="navbarNavDropdown" style="">
                   <ul class="navbar-nav">
                      <li class="nav-item active">
                         <a class="nav-link" href="index.html">Inicio<span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                         <a class="nav-link" href="about_me.html">Sobre mí</a>
                      </li>
                      <li class="nav-item">
                         <a class="nav-link" href="#">Resumen</a>
                      </li>
                   </ul>
                </div>
             </nav>`;
  }
}

window.customElements.define('nav-bar', NavBar);
