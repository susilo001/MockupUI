// Search Bar & Toggle


var btnShow = document.getElementById('btn-show')
var searchBar = document.getElementById('search-bar');
function show() {

    if (searchBar.classList.contains('hidden')) {
        searchBar.classList.remove('hidden')
        searchBar.classList.add('block')

    }
}
function hide() {
    searchBar.classList.remove('block')
    searchBar.classList.add('hidden')
}







