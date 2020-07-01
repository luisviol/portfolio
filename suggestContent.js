class MoreContent extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `                  <section>
                <div class="dropdown-divider mb-5"></div>
                <div class="row mb-5">
                   <div class="col-md-6">
                      <div class="card mb-3" style="max-width: 540px;">
                         <div class="row no-gutters py-4">
                            <div class="col-md-8">
                               <div class="card-body">
                                  <h5 class="lead">WHY X App</h5>
                                  <div class="mb-1 text-muted">App design</div>
                                  <p class="card-text">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                               </div>
                            </div>
                            <div class="col-md-4">
                               <img src="images/phone_prop.png" alt="WhyX Live Experiences" class="img-fluid mx-auto d-block">
                            </div>
                         </div>
                      </div>
                   </div>
                   <div class="col-md-6">
                      <div class="card mb-3" style="max-width: 540px;">
                         <div class="row no-gutters py-4">
                            <div class="col-md-8">
                               <div class="card-body">
                                  <h5 class="lead">Pandemic Research</h5>
                                  <div class="mb-1 text-muted">User research</div>
                                  <p class="card-text">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                               </div>
                            </div>
                            <div class="col-md-4">
                               <img src="images/phone_prop.png" alt="WhyX Live Experiences" class="img-fluid mx-auto d-block">
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </section>`;
  }
}

window.customElements.define('more-content', MoreContent);
