var movieListGlobal = [];

function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}
Movie.prototype.getData = function () {
    return this.title + " " + this.length + " " + this.genre + "min";

}

function Program(date) {
    this.date = new Date(date);
}


Program.prototype.getData = function () {
    var countDuration = 0;
    var countMovie = 0;
    var movieCount = movieListGlobal.length;

    for (var i = 0; i < movieCount; i++) {
        var indexMovie = movieCount[i];
        countDuration += indexMovie.length;
      
    }

    return count;

}



var movieList = document.querySelector(".m-list");
var movieQ = document.createElement("ul");

movieList.appendChild(movieQ);


function createMovie() {
    var title = document.querySelector("#movie-title").value;
    var length = document.querySelector("#movie-length").value;
    var formselect = document.querySelector("#genre-select");
    var genre = formselect.options[formselect.selectedIndex].text;


    var movie1 = new Movie(title, length, genre);


    var movieR = document.createElement("li");
    var movieText = document.createTextNode(movie1.getData());

    movieListGlobal.push(movie1);

    movieR.appendChild(movieText);
    movieList.appendChild(movieR);

}

function createProgram() {
    var datum = document.querySelector("#date").value;

};




document.querySelector(".create-movie").addEventListener("click", function (event) {

    createMovie();
    console.log(movieListGlobal);


});