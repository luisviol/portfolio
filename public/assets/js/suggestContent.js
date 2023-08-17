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
                                  <h5>WHY X App</h5>
                                  <span class="mb-1">App design</span>
                                  <p class="card-text mt-1">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                               </div>
                            </div>
                            <div class="col-md-4">
                               <img src="public/assets/img/phone_prop.png" alt="WhyX Live Experiences" class="img-fluid mx-auto d-block">
                            </div>
                         </div>
                      </div>
                   </div>
                   <div class="col-md-6">
                      <div class="card mb-3" style="max-width: 540px;">
                         <div class="row no-gutters py-4">
                            <div class="col-md-8">
                               <div class="card-body">
                                  <h5 >Pandemic Research</h5>
                                  <span class="mb-1">User research</span>
                                  <p class="card-text mt-1">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                               </div>
                            </div>
                            <div class="col-md-4">
                               <img src="public/assets/img/phone_prop.png" alt="WhyX Live Experiences" class="img-fluid mx-auto d-block">
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </section>`;
  }
}

window.customElements.define('more-content', MoreContent);
