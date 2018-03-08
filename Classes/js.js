class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    printPersonData() {
        return `Person: ${this.name} ${this.surname}`;

    }
}

class Programmer extends Person {
    constructor(name, surname, languages) {
        super(name, surname);
        this.languages = languages;
    }

    printProgrammerData() {
        return `${super.printPersonData()} Language: ${this.languages.join(", ")}`;

    }
    learnedNewLanguage(newLanguage) {
        this.languages.push(newLanguage);

    }

}



var Milorad = new Programmer("Milorad", "Mandrapa", ["Javascript", "C++"]);
Milorad.learnedNewLanguage("Java");
console.log(Milorad.printProgrammerData());