import * as chai from 'chai';
import {Elevator} from '../src/OO/Elevator';
chai.should();

describe('Elevator', () => {
    describe('when destination is less than current floor', () => {
        it('should return the absolute value of distance', () => {
            const elevator = new Elevator("elevator1", 5);
            const result = elevator.getDistance(2);
            result.should.equal(3);
        });
    });

    describe('when destination is greater than current floor', () => {
        it('should return the absolute value of distance', () => {
            const elevator = new Elevator("elevator1", 2);
            const result = elevator.getDistance(5);
            result.should.equal(3);
        });
    });

});

