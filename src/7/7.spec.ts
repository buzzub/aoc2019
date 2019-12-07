import { compute, generatePhaseSettings, findHighestSignal } from './7';
import { computeOutput } from '../0/intcode';
import { expect } from 'chai';
import 'mocha';

describe('Day 7', () => {

  describe('generatePhaseSettings', () => {
    it('should return the correct array of length 2', () => {
      const result = generatePhaseSettings(2);
      expect(result.length).to.equal(2);
      expect(result).to.eql([[0,1],[1,0]]);
    });
    it('should return the correct array of length 6', () => {
      const result = generatePhaseSettings(3);
      expect(result.length).to.equal(6);
      expect(result).to.eql([[0,1,2],[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]]);
    });
  });

  describe('Part 1', () => {

    it('should return 43210', () => {
      const program = [3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0];
      const phaseSetting = [4,3,2,1,0];
      const result: number = compute(program, phaseSetting);
      expect(result).to.eql(43210);
    });

    it('should return 54321', () => {
      const program = [3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0];
      const phaseSetting = [0,1,2,3,4];
      const result: number = compute(program, phaseSetting);
      expect(result).to.eql(54321);
    });

    it('should return 65210', () => {
      const program = [3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0];
      const phaseSetting = [1,0,4,3,2];
      const result: number = compute(program, phaseSetting);
      expect(result).to.eql(65210);
    });

    it('should return 65210', () => {
      const program = [3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0];
      const result: number = findHighestSignal(program, 5);
      console.log(result);
      expect(result).to.eql(65210);
    });

    it('should return 65210', () => {
      const program = [3,8,1001,8,10,8,105,1,0,0,21,34,51,64,81,102,183,264,345,426,99999,3,9,102,2,9,9,1001,9,4,9,4,9,99,3,9,101,4,9,9,102,5,9,9,1001,9,2,9,4,9,99,3,9,101,3,9,9,1002,9,5,9,4,9,99,3,9,102,3,9,9,101,3,9,9,1002,9,4,9,4,9,99,3,9,1002,9,3,9,1001,9,5,9,1002,9,5,9,101,3,9,9,4,9,99,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,99,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,1,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,99];
      const result: number = findHighestSignal(program, 5);
      console.log(result);
      expect(result).to.be.greaterThan(0);
    });

  });

  describe('Part 2', () => {

  });

});
