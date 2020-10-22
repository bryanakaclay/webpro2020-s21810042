console.log("Javascript Class & OOP");

// ----- Class & Constructor -----

/*
const Person = {
    firstName: "Black",
    lastName: "Jade",
    displayFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    },
};
Person.displayFullName()
*/

class orang{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    fullName(){
        console.log(`Nama : ${this.firstName} ${this.lastName}`)
    }
}
/*
const person1 = new orang('Bob', 'Jordan')
const person2 = new orang('Dab', 'Folean')
person1.fullName()
person2.fullName()
*/


// ----- Inheritance -----


class murid extends orang{
    constructor(firstName, lastName, NIM, age){
        super (firstName, lastName)
        this.NIM = NIM
        this.age = age
    }
    displaynim(){
        console.log(`NIM : ${this.NIM}`)
    }
    // --- Static ---
    static sayHello(){
        console.log("Hello World")
    }
    // --- Setter & Getter ---
    set studentScore(score){
        this.score = score
    }
    get studentScore(){
        return this.score
    }
}
const john = new murid('Horas', 'Billy', "10054", 20)
john.fullName()
john.displaynim()
murid.sayHello()
john.studentScore = 90
console.log(`Nilai : ${john.studentScore}`)