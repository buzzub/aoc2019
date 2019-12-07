import { compute } from './2';
import { expect } from 'chai';
import 'mocha';

describe('Day 2', () => {

  // 1,0,0,0,99 becomes 2,0,0,0,99 (1 + 1 = 2)
  it('should return updated program 1', () => {
    const program = [1,0,0,0,99];
    const result = compute(program);
    expect(result).to.eql([2,0,0,0,99]);
  });

  // 2,3,0,3,99 becomes 2,3,0,6,99 (3 * 2 = 6)
  it('should return updated program 2', () => {
    const program = [2,3,0,3,99];
    const result = compute(program);
    expect(result).to.eql([2,3,0,6,99]);
  });

  // 2,4,4,5,99,0 becomes 2,4,4,5,99,9801 (99 * 99 = 9801)
  it('should return updated program 3', () => {
    const program = [2,4,4,5,99,0];
    const result = compute(program);
    expect(result).to.eql([2,4,4,5,99,9801]);
  });

  // 1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99
  it('should return updated program 4', () => {
    const program = [1,1,1,4,99,5,6,0,99];
    const result = compute(program);
    expect(result).to.eql([30,1,1,4,2,5,6,0,99]);
  });

});
