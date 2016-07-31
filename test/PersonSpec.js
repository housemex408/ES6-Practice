import * as chai from 'chai';
import Person from '../src/Person';
chai.should();

describe('Person', () => {
    describe('when a name is given', () => {
        it('should speak given name', () => {
            const temp = new Person('Jose');
            const result = temp.speak();
            result.should.equal('Hello, my name is Jose!');
        });
        it('should speak given default name', () => {
            const temp = new Person();
            const result = temp.speak();
            result.should.equal('Hello, my name is John!');
        });
    });

    describe('when an age is given', () => {
        it('should equal 1900', () => {
            const temp = new Person('Jose');
            const result = temp.birthYear();
            result.should.equal(1900);
        });
    });
});

