var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "../css/input.css";
let AppComponent = class AppComponent extends LitElement {
    createRenderRoot() {
        return this;
    }
    render() {
        return html `
      <section title="carousel" class="mb-8 lg:px-20 px-4">
        <div class="carousel lg:h-100 h-80 relative w-full" data-carousel>
          <ul data-slides>
            <li data-active class="carousel-item inset-0 w-full">
              <article>
                <img
                  src="https://picsum.photos/id/237/1000/440"
                  class="w-full object-cover brightness-75"
                  loading="lazy"
                />
                <div
                  class="absolute transform lg:-translate-y-1/2 lg:inset-x-40 lg:top-1/2 top-8"
                >
                  <a href="single-page.html">
                    <h2
                      class="text-white break-words text-center font-bold lg:text-3xl"
                    >
                      Ea dolore incididunt duis velit proident sunt ad velit
                      dolor. Duis aliqua aute ad ea. Proident minim in cillum
                      officia excepteur ullamco cillum.
                    </h2>
                    <div
                      class="flex items-center justify-center divide-x divide-white"
                    >
                      <div class="avatar items-center lg:px-4 px-2 py-3">
                        <div class="lg:w-12 w-10 rounded-full">
                          <img
                            src="https://api.lorem.space/image/face?hash=92310"
                          />
                        </div>
                        <h4 class="pl-2 text-white hidden lg:block">
                          Susilo Suharsono
                        </h4>
                      </div>
                      <div class="lg:px-4 px-2 py-3 text-sm text-white">
                        June 13, 2022
                      </div>
                      <div class="lg:flex justify-end gap-2 lg:px-4 px-2 py-3">
                        <div class="badge badge-sm badge-accent">Fashion</div>
                        <div class="badge badge-sm badge-accent">Products</div>
                      </div>
                    </div>
                  </a>
                </div>
              </article>
            </li>
            <li class="carousel-item absolute inset-0 w-full">
              <article>
                <img
                  src="https://picsum.photos/id/257/1000/440"
                  class="w-full object-cover brightness-75"
                  loading="lazy"
                />
                <div
                  class="absolute transform lg:-translate-y-1/2 lg:inset-x-40 lg:top-1/2 top-8"
                >
                  <a href="single-page.html">
                    <h2
                      class="text-white break-words text-center font-bold lg:text-3xl"
                    >
                      Ea dolore incididunt duis velit proident sunt ad velit
                      dolor. Duis aliqua aute ad ea. Proident minim in cillum
                      officia excepteur ullamco cillum.
                    </h2>
                    <div
                      class="flex items-center justify-center divide-x divide-white"
                    >
                      <div class="avatar items-center px-4 py-3">
                        <div class="lg:w-12 w-10 rounded-full">
                          <img
                            src="https://api.lorem.space/image/face?hash=92310"
                          />
                        </div>
                        <h4 class="pl-2 text-white hidden lg:block">
                          Susilo Suharsono
                        </h4>
                      </div>
                      <div class="px-4 py-3 text-sm text-white">
                        June 13, 2022
                      </div>
                      <div class="lg:flex justify-end gap-2 px-4 py-3">
                        <div class="badge badge-sm badge-accent">Fashion</div>
                        <div class="badge badge-sm badge-accent">Products</div>
                      </div>
                    </div>
                  </a>
                </div>
              </article>
            </li>
            <li class="carousel-item absolute inset-0 w-full">
              <article>
                <img
                  src="https://picsum.photos/id/247/1000/440"
                  class="w-full object-cover brightness-75"
                  loading="lazy"
                />
                <div
                  class="absolute transform lg:-translate-y-1/2 lg:inset-x-40 lg:top-1/2 top-8"
                >
                  <a href="single-page.html">
                    <h2
                      class="text-white break-words text-center font-bold lg:text-3xl"
                    >
                      Ea dolore incididunt duis velit proident sunt ad velit
                      dolor. Duis aliqua aute ad ea. Proident minim in cillum
                      officia excepteur ullamco cillum.
                    </h2>
                    <div
                      class="flex items-center justify-center divide-x divide-white"
                    >
                      <div class="avatar items-center px-4 py-3">
                        <div class="lg:w-12 w-10 rounded-full">
                          <img
                            src="https://api.lorem.space/image/face?hash=92310"
                          />
                        </div>
                        <h4 class="pl-2 text-white hidden lg:block">
                          Susilo Suharsono
                        </h4>
                      </div>
                      <div class="px-4 py-3 text-sm text-white">
                        June 13, 2022
                      </div>
                      <div class="lg:flex justify-end gap-2 px-4 py-3">
                        <div class="badge badge-sm badge-accent">Fashion</div>
                        <div class="badge badge-sm badge-accent">Products</div>
                      </div>
                    </div>
                  </a>
                </div>
              </article>
            </li>
          </ul>

          <div
            class="absolute flex justify-between transform lg:-translate-y-1/2 left-5 right-5 lg:top-1/2 top-1/4"
          >
            <button data-carousel-button="prev" class="btn btn-circle">
              <ion-icon name="chevron-back"></ion-icon>
            </button>
            <button data-carousel-button="next" class="btn btn-circle">
              <ion-icon name="chevron-forward"></ion-icon>
            </button>
          </div>
        </div>
      </section>
    `; // use tailwind css utility classes
    }
};
AppComponent = __decorate([
    customElement("app-component")
], AppComponent);
export default AppComponent;
