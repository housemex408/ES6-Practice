import * as chai from 'chai';
import { ElevatorSystem } from '../src/OO/Elevator';
//chai.should();
const expect = chai.expect;

describe('ElevatorSystem', () => {
    describe('when no elevators and elevator requested', () => {
        it('should return null', () => {
            const elevator = new ElevatorSystem(20);
            const result = elevator.requestElevator(2);
            expect(result).to.be.null;
        });
    });
});

