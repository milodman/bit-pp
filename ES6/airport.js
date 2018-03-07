"use strict";
(
    function () {

        function Person(name, surname) {
            this.name = name;
            this.surname = surname;

        }
        Person.prototype.getData = function () {
            return `${this.name} ${this.surname}`;
        }
        // function person


        function Seat(number, category) {
            this.number = number || Math.round(Math.random() * (100 - 10) + 10);
            this.category = category || "e";

        }
        Seat.prototype.getData = function () {
            return `${this.number}, ${this.category.toUpperCase()}`;
        }
        // function seat


        function Passenger(name, surname, number, category) {
            this.name = name;
            this.surname = surname;
            this.number = number || Math.round(Math.random() * (100 - 10) + 10);
            this.category = category || ("e");

        }
        Passenger.prototype.getData = function (seat, person) {
            return `${this.number}, ${this.category.toUpperCase()}, ${this.name}, ${this.surname}`;
        }
        // function passenger


        function Flight(relation, date) {
            this.relation = relation;
            this.date = new Date(date);
            this.year = this.date.getFullYear();
            this.month = this.date.getMonth() + 1;
            this.day = this.date.getDate();
            this.listOfPassengers = [];
        }
        Flight.prototype.setDate = function () {
            return `${this.day}.${this.month}.${this.year}.`;
        }
        Flight.prototype.getData = function () {
            return `${this.setDate()} ${this.relation}`;
        }
        Flight.prototype.addPassenger = function (passenger) {
            this.listOfPassengers.push(passenger);
        }

        function Airport() {
            this.name = "Nikola Tesla";
            this.listOfFlights = [];
        }
        Airport.prototype.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        }
        Airport.prototype.getData = function () {
            let totalPassengers = 0;
            let output1 = "";
            this.listOfFlights.forEach(function (flight) {
                output1 += `    ${flight.getData()}
    `; 
                totalPassengers += flight.listOfPassengers.length
                flight.listOfPassengers.forEach(function (passenger) {
                    output1 += `    ${passenger.getData()}
        `;
                });
            });
            var output = `Airport: ${this.name} , total passengers: ${totalPassengers}
`;
            return output + output1;
        }

        // function flight

        function createFlight(relation, date) {
            return new Flight(relation, date);
        }
        // create flight

        function createPassenger(name, surname, number, category) {
            return new Passenger(name, surname, number, category);
        }
        // create passenger

        const passenger1 = createPassenger("Jessica", "Alba", 14, "b");
        const passenger2 = createPassenger("Julia", "Roberts", 11, "e");
        const passenger3 = createPassenger("Matt", "Damon");
        const passenger4 = createPassenger("Robbie", "Williams", 1);
        const passenger5 = createPassenger("Mornar", "Popaj")
        // create passenger

        const airport1 = new Airport();
        // instanceof airport

        const flight1 = createFlight("Belgrade - Paris", "2018-04-05");
        const flight2 = createFlight("Barcelona - Belgrade", "2018-04-12");
        // create flight

        flight1.addPassenger(passenger1);
        flight1.addPassenger(passenger2);
        flight2.addPassenger(passenger3);
        flight2.addPassenger(passenger4);
        flight2.addPassenger(passenger5);

        airport1.addFlight(flight1);
        airport1.addFlight(flight2);

        console.log(airport1.getData());
    }
)();