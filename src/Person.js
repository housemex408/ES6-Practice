export default class Person {
    constructor(name, age = 1900) {
        this.name = name || 'John';
        this.age = age;
    }

    speak() {
        return `Hello, my name is ${this.name}!`;
    }

    birthYear() {
        return (this.age !== 1900) ? new Date().getFullYear() - this.age : this.age;
    }
}
