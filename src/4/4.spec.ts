import { calculateNumberOfPasswords, calculateNumberOfPasswordsPart2 } from './4';
import { expect } from 'chai';
import 'mocha';

describe('Day 4', () => {

  describe('Part 1', () => {

    it('should find that 111111 is a password', () => {
      const result = calculateNumberOfPasswords(111111, 111111);
      expect(result).to.equal(1);
    });

    it('should find that 223450 is not a password', () => {
      const result = calculateNumberOfPasswords(223450, 223450);
      expect(result).to.equal(0);
    });

    it('should find that 123789 is not a password', () => {
      const result = calculateNumberOfPasswords(123789, 123789);
      expect(result).to.equal(0);
    });

    it('should find the total number of passwords', () => {
      const result = calculateNumberOfPasswords(158126, 624574);
      expect(result).to.be.greaterThan(0);
    });

  });

  describe('Part 2', () => {
  
    it('should find that 112233 is a password', () => {
      const result = calculateNumberOfPasswordsPart2(112233, 112233);
      expect(result).to.equal(1);
    });

    it('should find that 123444 is not a password', () => {
      const result = calculateNumberOfPasswordsPart2(123444, 123444);
      expect(result).to.equal(0);
    });

    it('should find that 111122 is a password', () => {
      const result = calculateNumberOfPasswordsPart2(111122, 111122);
      expect(result).to.equal(1);
    });

    it('should find that 111233 is a password', () => {
      const result = calculateNumberOfPasswordsPart2(111233, 111233);
      expect(result).to.equal(1);
    });

    it('should find the total number of passwords', () => {
      const result = calculateNumberOfPasswordsPart2(158126, 624574);
      expect(result).to.be.greaterThan(0);
    });

  });

});
