// Classy Classes
// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes
// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    get info() {
        return this.infoString()
    }

    infoString() {
        return `${this.name}s age is ${this.age}`
    }
}

let john = new Person('john', 34) // 'johns age is 34'
console.log(john.info);