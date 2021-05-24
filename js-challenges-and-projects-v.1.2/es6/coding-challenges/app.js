//Challenge 1
// const player = {
//     name: "James Bond",
//     codeName: "007",
//     age: 32,
//     address: {city: 'London'}  
// }

// console.log (`${player.name} is Agent ${player.codeName} and is ${player.age} years old.`);


//Challenge 2 OBJECT LITERALS
// function addressMaker (city, street, country) {
//     const newAddress = {city, street, country};

//     console.log(newAddress);
// }

// addressMaker ('Quezon', 'Ortigas Avenue', 'Philippines');

//Challenge 3 FOR OF
// const students = [
//     {name: "Manny", city:"Manila"},
//     {name: "Jose", city:"Intramuros"},
//     {name: "Ana", city:"Mandaluyong"}
// ]

// for (const student of students) {
//     console.log(`${student.name} : ${student.city}`);
// }


//Challenge 4 Default Parameters

// const buySomething = (food = 'something') => {
//     if (food === 'chicharon') {
//         console.log(`I am going to buy ${food} from the sari-sari store.`);
// }
//     else {
//         console.log(`I am going to buy ${food} from the sari-sari store.`);
//     }
// }

// buySomething ('chicharon');
// buySomething ();

//Classes
class Player {
    constructor(name,country) {
    this.name= name;
    this.country= country;
}

    displayInformation() {
        console.log(`${this.name} was born in ${this.country}`);
    }
}

let newMessi = new Player('Messi','Argentina');
newMessi.displayInformation();

class BasketballPlayer extends Player {
    constructor(name,age) {
        super(name);
        this.age = age;
    }

    displayInformation() {
        console.log(`${this.name} is ${this.age} years old and knows how to play basketball.`);
    }
    
}

let lebron = new BasketballPlayer('Lebron', 34);
lebron.displayInformation();