"use strict";
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello I'm ${this.age}`;
    }
}
//protected lang means that lang can be accessed inside of the class and it can also be accessed inside of the derived classes
//protected age means age can only be accessed inside of this class
const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
//While we can access a method that provides the age property, we cannot access the property age itself
// console.log(Dave.age) private
// console.log(Dave.lang) protected
//class extension
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`; //protected is accessible within the class webdev
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 24);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
/////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Peeps.count);
console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);
//static means that count does not apply to any instantiation of the class, it applies to the class directly itself
// It also does not apply to any object that you instantiate to the class
//////////////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === "string")) {
            //Every checks every element and after checking every element it returns true or false depending on whether the condition is met
            this.dataState = value;
            // return this.dataState = value, setters can't return a value
            return;
        }
        else {
            throw new Error("Param is not an array of strings ");
        }
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
