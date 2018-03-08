"use strict";

(function () {


    class Genre {
        constructor(name) {
            this.name = name;
        }

        getData() {
            const firstLetter = this.name.charAt(0);
            const lastLetter = this.name.charAt(this.name.length - 1);
            const result = firstLetter + lastLetter;

            return result.toUpperCase()

        }
    }

    class Movie {
        constructor(title, genre, length) {
            this.title = title;
            this.genre = genre;
            this.length = length;
        }

        getData() {
            return `${this.title}, ${this.length} min, ${this.genre.getData()}`

        }
    }

    class Program {
        constructor(date) {
            this.date = new Date;
            this.myDay = this.date.getDate();
            this.myMonth = this.date.getMonth() + 1;
            this.myDate = this.date.getFullYear();
            this.fullDate = `${this.myDay}.${this.myMonth}.${this.myDate}`;
            this.listOfMovies = [];
        }

        addMovie(movie) {
            return this.listOfMovies.push(movie)
        }

        numberOfMovies() {
            return this.listOfMovies.length;
        }

        getProgramLength() {
            
            let length = this.listOfMovies.reduce(((accumulator, currentElement) => 
            accumulator + currentElement.length), 0);
            
            return length;
        }

        getData() {

            let output = "";
            output = `${this.fullDate}, program duration, ${this.getProgramLength()} min
`;
            this.listOfMovies.forEach(function (element) {
                output += `       ${element.getData()} 
`;
            })
            return output;

        }
    }

    class Festival {
        constructor(name) {
            this.name = name;
            this.listOfPrograms = [];
        }

        numberOfAllMovies() {
            let num = 0;
            this.listOfPrograms.forEach(function (element) {
                num += element.numberOfMovies();
            })
            return num;
        }

        addProgram(program) {
            this.listOfPrograms.push(program);
        }

        getData() {
            const output = `${this.name} has ${this.numberOfAllMovies()} movie titles
`;
            let output1 = "";
            this.listOfPrograms.forEach(function (element) {
                output1 += `    ${element.getData()}`
            })

            return output + output1;
        }
    }

    const action = new Genre("action");
    const drama = new Genre("drama");
    const comedy = new Genre("comedy");


    const movie = new Movie("Svemirci su krivi za sve", action, 90);
    const movie1 = new Movie("Ko to tamo peva", drama, 101);
    const movie2 = new Movie("Umri muski", action, 119);
    const movie3 = new Movie("Why him", comedy, 90);

    const program1 = new Program("2018-04-05");
    const program2 = new Program("2018-05-07")
    program1.addMovie(movie);
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program2.addMovie(movie3);
    const weekendFestival = new Festival("Weekend festival")
    weekendFestival.addProgram(program1);
    weekendFestival.addProgram(program2);

    console.log(weekendFestival.getData());

})()