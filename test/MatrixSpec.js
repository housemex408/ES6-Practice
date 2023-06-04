import * as chai from 'chai';
import Matrix from '../src/Matrix';
chai.should();

describe('Matrix', () => {
    describe('when 2x2 matrix is found', () => {
        it('should return x=2, y=2', () => {
            const image = [
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 0, 1],
                [1, 1, 1, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1],
              ];
            const matrix = new Matrix(image);
            const rectangle = matrix.findRectangle(matrix);
            const result = { 
                x: 2, y: 2, width: 2, height: 2
            }
            rectangle.should.equal(result);
        });
    });
});

