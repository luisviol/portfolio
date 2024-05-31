class NavBar extends HTMLElement {
   constructor() {
      super();
      this.innerHTML = `          <style> nav {font-family: 'Inter', sans-serif;}
  </style><nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand nav" href="index.html">Luis Villasmil</a>
                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse justify-content-end collapse" id="navbarNavDropdown" style="">
                   <ul class="navbar-nav">
                      <li class="nav-item">
                         <a class="nav-link" href="index.html">Home<span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                         <a class="nav-link" href="about_me.html">About me<span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">Work</a>
                        <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Portfolio #1</a>
                        <a class="dropdown-item" href="#">Portfolio #2</a>
                        <a class="dropdown-item" href="#">Portfolio #3</a>
                        </div>
                      </li>
                      <div class="dropdown-divider"></div>
                      <li class="nav-item">
                         <a class="nav-link" href="about_me.html">Download Resume<span class="sr-only">(current)</span></a>
                      </li>
                   </ul>
                </div>
             </nav>`;
   }
}

window.customElements.define('nav-bar', NavBar);
