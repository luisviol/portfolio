class NavBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `         <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="index.html">Luis Villasmil</a>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse justify-content-end collapse" id="navbarNavDropdown" style="">
                   <ul class="navbar-nav">
                      <li class="nav-item active">
                         <a class="nav-link" href="index.html">Home<span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">Works</a>
                        <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Portfolio #1</a>
                        <a class="dropdown-item" href="#">Portfolio #2</a>
                        <a class="dropdown-item" href="#">Portfolio #3</a>
                        </div>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="about_me.html" data-toggle="dropdown" aria-expanded="false">About</a>
                        <div class="dropdown-menu">
                        <a class="dropdown-item" href="about_me.html">About me</a>
                        <a class="dropdown-item" href="#">Contact</a>
                        </div>
                      </li>
                      <li class="btn-group">
                         <a class="btn btn-primary" href="#">Resume</a>
                      </li>
                   </ul>
                </div>
             </nav>`;
  }
}

window.customElements.define('nav-bar', NavBar);
