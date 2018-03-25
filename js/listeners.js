let searchBar = document.getElementById("search-bar");

searchBar.addEventListener("keypress", function() {
  pageBuilder.buildHTML(apiRequest.search(searchBar.value));
});
