const facts = require('../../src/models/facts');
const chai = require('chai');
const expect = chai.expect;

describe('Main', () => {
  /**
   * Test for root route, with GET request
  **/
  describe('Facts', () => {
    describe('getSingle', () => {
      it('it should return a single fact of random', () => {
        const actual = facts.getSingle();
        expect(actual).to.be.a('string');
      });
      it('it should return the single fact of ID 1', () => {
        const actualOne = facts.getSingle(1);
        const expectedOne = 'In 1987 cats overtook dogs as the number one pet in America.';
        expect(actualOne).to.be.a('string');
        expect(actualOne).to.be.equal(expectedOne);
      });
      it('it should return the single fact of ID 3', () => {
        const actualThree = facts.getSingle(3);
        const expectedThree = 'Mother cats teach their kittens to use the litter box.';
        expect(actualThree).to.be.a('string');
        expect(actualThree).to.be.equal(expectedThree);
      });
    });
    describe('getMany', () => {
      it('it should return an array of 3 facts of random', () => {
        const actual = facts.getMany(3);
        expect(actual).to.be.a('array');
        expect(actual[0]).to.be.a('string');
        expect(actual.length).to.be.equal(3);
      });
    });
  });

});
