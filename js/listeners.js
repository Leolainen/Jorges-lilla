let searchBar = document.getElementById("search-bar");

searchBar.addEventListener("keypress", function() {
  apiRequest.search(searchBar.value);
});
