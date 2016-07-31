import * as chai from 'chai';
import Person from '../src/Person';
chai.should();

describe('Person', () => {
    describe('person.speak()', () => {
        it('should speak', () => {
            const temp = new Person('Jose');
            const result = temp.speak();
            result.should.equal('Hello, my name is Jose!');
        });
    });
});

