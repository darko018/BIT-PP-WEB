var currentUrl = window.location.href;
var url = new URL(currentUrl);
var id = url.searchParams.get("id");

var title = document.querySelector(".title");
var image = document.querySelector(".image");
var castElement = document.querySelector(".cast ul")
var detailsElement = document.querySelector(".details");
var seasonsElement = document.querySelector(".seasons ul");
var homepage = document.querySelector("button.homepage")

function renderData(data) {
  title.textContent = data.name;
  image.setAttribute("src", data.image.original);

  var cast = data._embedded.cast;
  for (var i = 0; i < cast.length; i++) {
    var castName = document.createElement("li");
    castName.textContent = cast[i].person.name
    castElement.appendChild(castName)
  }

  detailsElement.innerHTML = data.summary
}

function getShowData() {
  var req = new XMLHttpRequest();
  var baseUrl = "http://api.tvmaze.com/shows/" + id + "?embed=cast";

  req.open("GET", baseUrl);
  req.onload = function () {
    renderData(JSON.parse(req.responseText))
  }
  req.send();
}

getShowData();

function renderSeasons(seasons) {
  for (var i = 0; i < seasons.length; i++) {
    var season = document.createElement("li");
    season.textContent = seasons[i].premiereDate + " - " + seasons[i].endDate;
    seasonsElement.appendChild(season);
  }
}

function getShowSeasons() {
  var req = new XMLHttpRequest();
  var baseUrl = "http://api.tvmaze.com/shows/" + id + "/seasons"

  req.open("GET", baseUrl);
  req.onload = function () {
    renderSeasons(JSON.parse(req.responseText))
  }
  req.send();
}

getShowSeasons();