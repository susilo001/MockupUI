import LazyLoad from "./lazyload.esm.js";
import themeChange from './theme-change/index.js';
import themeToggle from './theme-change/index.js';

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
// Search Bar & Toggle








