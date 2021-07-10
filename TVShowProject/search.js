var dropdown = document.querySelector(".toggle");
var search = document.querySelector(".search");


function createAllShows(tvshow) {
  var tvshowTitle = document.createElement("a")
  tvshowTitle.setAttribute("href", "info-page.html?id=" + tvshow.show.id)
  tvshowTitle.textContent = tvshow.show.name

  dropdown.appendChild(tvshowTitle)
  
}

function listAllShows(showsData) {
  
  for (var i = 0; i < showsData.length; i++) {
    createAllShows(showsData[i])
  }
}

function onSearch(event) {
  if (event.keyCode === 13) {
    getAllShows()
  }
}

function getAllShows() {
  var req = new XMLHttpRequest;
  var baseUrl = " http://api.tvmaze.com/search/shows?q=";

  req.open("GET", baseUrl + search.value.trim());
  req.onload = function () { 
    listAllShows(JSON.parse(req.responseText))
  };
  req.send();
  dropdown.innerHTML = "";
}

search.addEventListener("keypress", onSearch)


