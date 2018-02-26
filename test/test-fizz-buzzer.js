const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should raise an error if arg is not a number', function() {
        const badInputs = ['1', true, 'string'];
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input).to.throw(Error);
            });
        });
    });

    it('should return fizz-buzz if number is divisible by 3 and 5', function(){
        const goodInputs = [15, 30, 45, 60, 1500];
        goodInputs.forEach(function(input){
            const result = fizzBuzzer(input);
            expect(result).to.equal('fizz-buzz');
        });
    });

    it('should return buzz if number is divisible by 5', function(){
        const goodInputs = [5, 10, 20, 5000];
        goodInputs.forEach(function(input){
            const result = fizzBuzzer(input);
            expect(result).to.equal('buzz');
        });
    });

    it('should return fizz if number is divisible by 3', function(){
        const goodInputs = [3,6,9,3333];
        goodInputs.forEach(function(input){
            const result = fizzBuzzer(input);
            expect(result).to.equal('fizz');
        });
    });

    it('should return the number if not divisible by 3 or 5', function(){
        const goodInputs = [4,19,23,234568];
        goodInputs.forEach(function(input){
            const result = fizzBuzzer(input);
            expect(result).to.equal(input);
        });
    });
});
