"use strict";
(function () {

    function Person(name, lastname){
        this.name = name;
        this.lastname = lastname;
        this.getData = function () {
                return name + " " + lastname;
        }
    }

    function Seat(category) {
        this.number = parseInt((90 * Math.random() + 10).toFixed());
        this.category = category || 'e';
        this.seatMark = function () {
            return this.number + ', ' + this.category.toUpperCase();
        }

    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData =  function(){
            return this.seat.seatMark() + ', ' + this.person.getData();
        }

    }
    
    function Flight(relation,date,passenger){
        this.relation = relation;
        this.date = new Date(date);
        this.passenger = [];

        this.addPassenger = function(passenger){
            this.passenger.push(passenger)
        }
    }

    var person1 = new Person('Andrej', 'Rubljov');
    var seat = new Seat();
    var passenger = new Passenger(person1 , seat)
    var flight = new Flight('Belgrade - Mexico City', '2018-03-15');
     console.log(person1.getData());
    console.log(seat.seatMark());

    
    





})();