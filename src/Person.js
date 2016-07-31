class Person {
    constructor(name) {
        this.name = name || 'John';
    }

    speak() {
        return `Hello, my name is ${this.name}!`;
    }
}

export default Person;