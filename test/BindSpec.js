import * as chai from 'chai';
chai.should();

describe('Bind', () => {
    describe('when method is borrowed and not bound to object', () => {
        it('should throw an error', () => {
            var car = { 
                registrationNumber: "GA12345",
                brand: "Toyota",
            
                displayDetails: function(){
                    console.log(this.registrationNumber + " " + this.brand);
                }
            }

            var myCarDetails =  car.displayDetails;
            myCarDetails();

        });
    });
});

