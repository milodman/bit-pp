"use strict";

(function () {

    function Genre(name) {
        this.name = name;
    }
    Genre.prototype.getData = function () {
        const firstLetter = this.name.charAt(0);
        const lastLetter = this.name.charAt(this.name.length - 1);
        const result = firstLetter + lastLetter;

        return result.toUpperCase();
    }
    // function Genre

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }
    Movie.prototype.getData = function () {
        return `${this.title}, ${this.length} min, ${this.genre.getData()}`;
    }
    // function movie


    function Program(date) {
        this.date = new Date(date);
        this.myDay = this.date.getDate();
        this.myMonth = this.date.getMonth() + 1;
        this.myDate = this.date.getFullYear();
        this.fullDate = `${this.myDay}.${this.myMonth}.${this.myDate}`;
        this.listOfMovies = [];

    }
    Program.prototype.addMovie = function (movie) {
        return this.listOfMovies.push(movie);
    }
    Program.prototype.numberOfMovies = function () {
        return this.listOfMovies.length;
    }

    Program.prototype.getProgramLength = function () {
        let length = 0;
        //new way
        this.listOfMovies.forEach(function (movie) {
                length += movie.length;

            }

        )
        return length;
    }

    //old way
    //     for (let i = 0; i < this.listOfMovies.length; i++) {
    //         const movie = this.listOfMovies[i];
    //     }
    // }
    Program.prototype.getData = function () {
        let output = "";
        output = `${this.fullDate}, program duration, ${this.getProgramLength()} min
`;

        //new way
        this.listOfMovies.forEach(function (element) {
            output += `       ${element.getData()} 
`;
        })
        return output;
    }
    // old way
    //     for (let i = 0; i < this.listOfMovies.length; i++) {
    //         const movie = this.listOfMovies[i]
    //         output += `       ${movie.getData()} 
    // `;
    //     }
    //     return output;
    // // }
    // function program getData important

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];

    }
    Festival.prototype.numberOfAllMovies = function () {
        let num = 0;
        this.listOfPrograms.forEach(function (element) {
            num += element.numberOfMovies();
        })



        return num;
    }
    // for (let i = 0; i < this.listOfPrograms.length; i++) {
    //     num += this.listOfPrograms[i].numberOfMovies();

    // }
    Festival.prototype.addProgram = function (program) {
        this.listOfPrograms.push(program);

    };
    Festival.prototype.getData = function () {
        const output = `${this.name} has ${this.numberOfAllMovies()} movie titles
`;
        let output1 = "";
        this.listOfPrograms.forEach(function (element) {
            output1 += `    ${element.getData()}`

        })
        // for (let i = 0; i < this.listOfPrograms.length; i++) {
        //     const program = this.listOfPrograms[i];
        //     output1 += "\t" + program.getData();

        // }
        return output + output1;
    }
    // function festival


    const action = new Genre("action");
    const drama = new Genre("drama");
    const comedy = new Genre("comedy");
    // console.log(action.getData());

    const movie = new Movie("Svemirci su krivi za sve", action, 90);
    const movie1 = new Movie("Ko to tamo peva", drama, 101);
    const movie2 = new Movie("Umri muski", action, 119);
    const movie3 = new Movie("Why him", comedy, 90);

    //console.log(movie.getData());


    const program1 = new Program("2018-04-05");
    const program2 = new Program("2018-05-07")
    program1.addMovie(movie);
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program2.addMovie(movie3);
    const weekendFestival = new Festival("Weekend festival")
    weekendFestival.addProgram(program1);
    weekendFestival.addProgram(program2);
    //console.log(program1.listOfMovies);
    console.log(weekendFestival.getData());


})();