import LazyLoad from "./lazyload.esm.js";
import themeChange from './theme-change/index.js';
import themeToggle from './theme-change/index.js';

// Carousel
const buttonCaraousel = document.querySelectorAll("[data-carousel-button]")
buttonCaraousel.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlides = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlides) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlides.dataset.active

    })
})


// Search Bar & Toggle
var searchBar = document.getElementById('search-bar');
var btnshow = document.getElementById('btn-show');
btnshow.addEventListener('click', function () {
    if (searchBar.classList.contains('hidden')) {
        searchBar.classList.remove('hidden')
        searchBar.classList.add('block')

    }
})
searchBar.addEventListener('mouseout', () => {
    searchBar.classList.remove('block')
    searchBar.classList.add('hidden')
})

// Toggle Darkmode
themeToggle()
themeChange()

// Lazy Load Plugins
var lazyLoadInstance = new LazyLoad({
    use_native: true,
    callback_error: (img) => {
        // Use the following line only if your images have the `srcset` attribute
        img.setAttribute("srcset", "fallback_image@1x.jpg 1x, fallback_image@2x.jpg 2x");
        img.setAttribute("src", "fallback_image@1x.jpg");
    }
});
lazyLoadInstance.update();









