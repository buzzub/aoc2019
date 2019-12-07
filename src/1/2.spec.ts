import { calcFuel } from './1';
import { expect } from 'chai';
import 'mocha';

describe('Day 1', () => {

  it('should calculate fuel for mass 1', () => {
    const mass = 12;
    const result = calcFuel(mass);
    expect(result).to.equal(2);
  });

  it('should calculate fuel for mass 2', () => {
    const mass = 14;
    const result = calcFuel(mass);
    expect(result).to.equal(2);
  });

  it('should calculate fuel for mass 3', () => {
    const mass = 1969;
    const result = calcFuel(mass);
    expect(result).to.equal(654);
  });

  it('should calculate fuel for mass 4', () => {
    const mass = 100756;
    const result = calcFuel(mass);
    expect(result).to.equal(33583);
  });

});
