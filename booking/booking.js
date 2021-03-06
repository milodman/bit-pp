"use strict";
(function () {
    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    };
    Country.prototype.getData = function () {
        var firstLetter = this.name[0].toUpperCase();
        var secondLetter = this.name[1].toUpperCase();
        var firstSecondLetter = firstLetter + secondLetter;
        return firstSecondLetter;
    }


    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = new Date(dateOfBirth);
        this.yearOfBirth = this.dateOfBirth.getFullYear();

    };
    Person.prototype.getData = function () {
        var dayOfBirth = this.dateOfBirth.getDate();
        var monthOfBirth = this.dateOfBirth.getMonth() + 1;
        var yearOfBirth = this.dateOfBirth.getFullYear();
        var fullDateOfBirth = dayOfBirth + "." + monthOfBirth + "." + yearOfBirth
        var output = this.name + " " + this.surname + ", " + fullDateOfBirth;
        return output;
    }
    Person.prototype.getAge = function () {
        var today = new Date().getFullYear();
        return today - this.yearOfBirth;
    }


    function Player(person, betAmount, country) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
    };
    Player.prototype.getData = function () {
        var output;
        var expectedAmmount = this.betAmount * this.country.odds;

        return this.country.getData() + ", " + expectedAmmount + " eur" + ", " + this.person.name + ", " + this.person.getAge() + " years";
    }


    function Address(country, city, postalCode, street, stNumber) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.stNumber = stNumber;
    };
    Address.prototype.getAddressWithoutNumber = function () {
        return this.street + ", " + this.postalCode + " " + this.city + ", " + this.country.getData();
    }

    Address.prototype.getAddress = function () {
        return this.street + " " + this.stNumber + ", " + this.postalCode + " " + this.city + ", " + this.country.getData();
    }


    function BettingPlace(address, player) {
        this.address = address;
        this.listOfPlayers = [];
    };
    BettingPlace.prototype.getData = function () {
        return this.address.getAddressWithoutNumber() + ", sum of all bets: " + this.getSumOfAllBets();
    };
    BettingPlace.prototype.getSumOfAllBets = function () {
        var sumOfaAllbets = 0;
        for (var i = 0; i < this.listOfPlayers.length; i++) {
            sumOfaAllbets += this.listOfPlayers[i].betAmount;
        }
        return sumOfaAllbets;
    }
    BettingPlace.prototype.addPlayer = function (player) {
        this.listOfPlayers.push(player);
    }

    function BettingHouse(competition) {
        this.competition = competition;
        this.listOfBettingPlaces = [];

    };
    BettingHouse.prototype.addBettingPlace = function (bettingPlace) {
        this.listOfBettingPlaces.push(bettingPlace);
    }
    BettingHouse.prototype.getData = function () {
        var numberOfPlayers = this.getNumberOfPlayersInHouse();
        var counterSrbija = 0;

        var output = this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + numberOfPlayers + " bets" + "\n\t";
        for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
            output += this.listOfBettingPlaces[i].getData() + "\n";
            for (var j = 0; j < this.listOfBettingPlaces[i].listOfPlayers.length; j++) {
                output += " \t \t" + this.listOfBettingPlaces[i].listOfPlayers[j].getData() + " \t\n";
                if (this.listOfBettingPlaces[i].listOfPlayers[j].country.getData() === "SR") {
                    counterSrbija++;


                }
            }

        }

        output = output + "Na Srbiju ima: " + counterSrbija + " opklada.";
        return output;
    };
    BettingHouse.prototype.getNumberOfPlayersInHouse = function () {
        var numberOfPlayers = 0;
        for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
            numberOfPlayers += this.listOfBettingPlaces[i].listOfPlayers.length;
        }
        return numberOfPlayers;
    }

    function createPlayer(name, surname, dateOfBirth, betAmount, country) {
        var person = new Person(name, surname, dateOfBirth);
        return new Player(person, betAmount, country);
    };

    function createBettingPlace(address) {
        return new BettingPlace(address);
    };


    var country1 = new Country("Srbija", 2, "Europe");
    var country2 = new Country("Greece", 5, "Europe");

    var address1 = new Address(country1, "Beograd", 11000, "Nemanjina", 4);

    var player1 = createPlayer("Milorad", "Mandrapa", "02.02.1998", 120, country1);
    var player2 = createPlayer("Miloraddddd", "Mandrapaaaaa", "03.03.2000", 150, country2);
    var player3 = createPlayer("terter", "Mandrapaaaaa", "03.03.1986", 150, country2);
    var player4 = createPlayer("fghfghfg", "Mandrapaaaaa", "03.03.1969", 150, country1);

    var bettingPl1 = createBettingPlace(address1);
    bettingPl1.addPlayer(player1);
    bettingPl1.addPlayer(player2);

    var bettingPl2 = createBettingPlace(address1);
    bettingPl2.addPlayer(player3);
    bettingPl2.addPlayer(player4);


    var bettinghouse1 = new BettingHouse("Football World Cup Winner");
    bettinghouse1.addBettingPlace(bettingPl1);
    bettinghouse1.addBettingPlace(bettingPl2);

    console.log(bettinghouse1.getData());
})();