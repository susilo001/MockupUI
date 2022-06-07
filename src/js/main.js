
// Search Bar & Toggle
var btnToggle = document.getElementById('toggle-search');
var searchBar = document.getElementById('search-bar');

window.onclick = function (event) {
    if (event.target !== 'searchBar') {
        searchBar.classList.toggle('hidden')
    }
};

btnToggle.onclick = function () {
    searchBar.classList.toggle('block')
};
