import { compute } from './5';
import { computeOutput } from '../0/intcode';
import { expect } from 'chai';
import 'mocha';

describe('Day 5', () => {

  describe('Part 1', () => {

    // 1,0,0,0,99 becomes 2,0,0,0,99 (1 + 1 = 2)
    it('should return updated program 1', () => {
      const program = [1,0,0,0,99];
      const result: computeOutput = compute(program);
      expect(result.program).to.eql([2,0,0,0,99]);
    });

    // 2,3,0,3,99 becomes 2,3,0,6,99 (3 * 2 = 6)
    it('should return updated program 2', () => {
      const program = [2,3,0,3,99];
      const result: computeOutput = compute(program);
      expect(result.program).to.eql([2,3,0,6,99]);
    });

    // 2,4,4,5,99,0 becomes 2,4,4,5,99,9801 (99 * 99 = 9801)
    it('should return updated program 3', () => {
      const program = [2,4,4,5,99,0];
      const result: computeOutput = compute(program);
      expect(result.program).to.eql([2,4,4,5,99,9801]);
    });

    // 1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99
    it('should return updated program 4', () => {
      const program = [1,1,1,4,99,5,6,0,99];
      const result: computeOutput = compute(program);
      expect(result.program).to.eql([30,1,1,4,2,5,6,0,99]);
    });

    it('should output 0', () => {
      const program = [3,0,4,0,99];
      const result: computeOutput = compute(program, 77);
      expect(result.program).to.eql([77,0,4,0,99]);
      expect(result.output).to.eql(77);
    });

    it('should output 0', () => {
      const program = [1101,100,-1,4,0];
      const result: computeOutput = compute(program, 1);
      expect(result.program).to.eql([1101,100,-1,4,99]);
    });

    it('should output the answer', () => {
      const program = [3,225,1,225,6,6,1100,1,238,225,104,0,1102,27,28,225,1,113,14,224,1001,224,-34,224,4,224,102,8,223,223,101,7,224,224,1,224,223,223,1102,52,34,224,101,-1768,224,224,4,224,1002,223,8,223,101,6,224,224,1,223,224,223,1002,187,14,224,1001,224,-126,224,4,224,102,8,223,223,101,2,224,224,1,224,223,223,1102,54,74,225,1101,75,66,225,101,20,161,224,101,-54,224,224,4,224,1002,223,8,223,1001,224,7,224,1,224,223,223,1101,6,30,225,2,88,84,224,101,-4884,224,224,4,224,1002,223,8,223,101,2,224,224,1,224,223,223,1001,214,55,224,1001,224,-89,224,4,224,102,8,223,223,1001,224,4,224,1,224,223,223,1101,34,69,225,1101,45,67,224,101,-112,224,224,4,224,102,8,223,223,1001,224,2,224,1,223,224,223,1102,9,81,225,102,81,218,224,101,-7290,224,224,4,224,1002,223,8,223,101,5,224,224,1,223,224,223,1101,84,34,225,1102,94,90,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,1007,677,677,224,102,2,223,223,1005,224,329,101,1,223,223,1108,226,677,224,1002,223,2,223,1005,224,344,101,1,223,223,1008,677,677,224,102,2,223,223,1005,224,359,101,1,223,223,8,226,677,224,1002,223,2,223,1006,224,374,101,1,223,223,108,226,677,224,1002,223,2,223,1006,224,389,1001,223,1,223,1107,226,677,224,102,2,223,223,1005,224,404,1001,223,1,223,7,226,677,224,1002,223,2,223,1005,224,419,101,1,223,223,1107,677,226,224,102,2,223,223,1006,224,434,1001,223,1,223,1107,226,226,224,1002,223,2,223,1006,224,449,101,1,223,223,1108,226,226,224,1002,223,2,223,1005,224,464,101,1,223,223,8,677,226,224,102,2,223,223,1005,224,479,101,1,223,223,8,226,226,224,1002,223,2,223,1006,224,494,1001,223,1,223,1007,226,677,224,1002,223,2,223,1006,224,509,1001,223,1,223,108,226,226,224,1002,223,2,223,1006,224,524,1001,223,1,223,1108,677,226,224,102,2,223,223,1006,224,539,101,1,223,223,1008,677,226,224,102,2,223,223,1006,224,554,101,1,223,223,107,226,677,224,1002,223,2,223,1006,224,569,101,1,223,223,107,677,677,224,102,2,223,223,1006,224,584,101,1,223,223,7,677,226,224,102,2,223,223,1005,224,599,101,1,223,223,1008,226,226,224,1002,223,2,223,1005,224,614,1001,223,1,223,107,226,226,224,1002,223,2,223,1005,224,629,101,1,223,223,7,226,226,224,102,2,223,223,1006,224,644,1001,223,1,223,1007,226,226,224,102,2,223,223,1006,224,659,101,1,223,223,108,677,677,224,102,2,223,223,1005,224,674,1001,223,1,223,4,223,99,226];
      const result: computeOutput = compute(program, 1);
      expect(result.output).to.not.be.undefined;
    });

  });

  describe('Part 2', () => {

    describe('comparisons', () => {

      it('should use position mode to check input is not equal to 8', () => {
        const program = [3,9,8,9,10,9,4,9,99,-1,8];
        // const program = [3,9,8,9,10,9,4,9,99,7,8];
        // const program = [3,9,8,9,10,9,4,9,99,0,8];
        const result: computeOutput = compute(program, 7);
        expect(result.output).to.equal(0);
      });
      it('should use position mode to check input is equal to 8', () => {
        const program = [3,9,8,9,10,9,4,9,99,-1,8];
        const result: computeOutput = compute(program, 8);
        expect(result.output).to.equal(1);
      });

      it('should use position mode to check input is less than 8', () => {
        const program = [3,9,7,9,10,9,4,9,99,-1,8];
        const result: computeOutput = compute(program, 7);
        expect(result.output).to.equal(1);
      });
      it('should use position mode to check input is not less than 8', () => {
        const program = [3,9,7,9,10,9,4,9,99,-1,8];
        const result: computeOutput = compute(program, 8);
        expect(result.output).to.equal(0);
      });

      it('should use immediate mode to check input is not equal to 8', () => {
        const program = [3,3,1108,-1,8,3,4,3,99];
        const result: computeOutput = compute(program, 7);
        expect(result.output).to.equal(0);
      });
      it('should use immediate mode to check input is equal to 8', () => {
        const program = [3,3,1108,-1,8,3,4,3,99];
        const result: computeOutput = compute(program, 8);
        expect(result.output).to.equal(1);
      });

      it('should use immediate mode to check input is less than 8', () => {
        const program = [3,3,1107,-1,8,3,4,3,9];
        const result: computeOutput = compute(program, 7);
        expect(result.output).to.equal(1);
      });
      it('should use immediate mode to check input is not less than 8', () => {
        const program = [3,3,1107,-1,8,3,4,3,9];
        const result: computeOutput = compute(program, 8);
        expect(result.output).to.equal(0);
      });
    });

    describe('jumps', () => {

      it('should use position mode to perform a jump', () => {
        const program = [3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9];
        const result: computeOutput = compute(program, 0);
        expect(result.output).to.equal(0);
      });
      it('should use position mode to perform a jump', () => {
        const program = [3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9];
        const result: computeOutput = compute(program, 1);
        expect(result.output).to.equal(1);
      });

      it('should use immediate mode to perform a jump', () => {
        const program = [3,3,1105,-1,9,1101,0,0,12,4,12,99,1];
        const result: computeOutput = compute(program, 0);
        expect(result.output).to.equal(0);
      });
      it('should use immediate mode to perform a jump', () => {
        const program = [3,3,1105,-1,9,1101,0,0,12,4,12,99,1];
        const result: computeOutput = compute(program, 1);
        expect(result.output).to.equal(1);
      });
    });

    describe('test', () => {
      it('should output 999', () => {
        const program = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99];
        const result: computeOutput = compute(program, 1);
        expect(result.output).to.equal(999);
      });
      it('should output 1000', () => {
        const program = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99];
        const result: computeOutput = compute(program, 8);
        expect(result.output).to.equal(1000);
      });
      it('should output 1001', () => {
        const program = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99];
        const result: computeOutput = compute(program, 9);
        expect(result.output).to.equal(1001);
      });

      it('should output the answer', () => {
        const program = [3,225,1,225,6,6,1100,1,238,225,104,0,1102,27,28,225,1,113,14,224,1001,224,-34,224,4,224,102,8,223,223,101,7,224,224,1,224,223,223,1102,52,34,224,101,-1768,224,224,4,224,1002,223,8,223,101,6,224,224,1,223,224,223,1002,187,14,224,1001,224,-126,224,4,224,102,8,223,223,101,2,224,224,1,224,223,223,1102,54,74,225,1101,75,66,225,101,20,161,224,101,-54,224,224,4,224,1002,223,8,223,1001,224,7,224,1,224,223,223,1101,6,30,225,2,88,84,224,101,-4884,224,224,4,224,1002,223,8,223,101,2,224,224,1,224,223,223,1001,214,55,224,1001,224,-89,224,4,224,102,8,223,223,1001,224,4,224,1,224,223,223,1101,34,69,225,1101,45,67,224,101,-112,224,224,4,224,102,8,223,223,1001,224,2,224,1,223,224,223,1102,9,81,225,102,81,218,224,101,-7290,224,224,4,224,1002,223,8,223,101,5,224,224,1,223,224,223,1101,84,34,225,1102,94,90,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,1007,677,677,224,102,2,223,223,1005,224,329,101,1,223,223,1108,226,677,224,1002,223,2,223,1005,224,344,101,1,223,223,1008,677,677,224,102,2,223,223,1005,224,359,101,1,223,223,8,226,677,224,1002,223,2,223,1006,224,374,101,1,223,223,108,226,677,224,1002,223,2,223,1006,224,389,1001,223,1,223,1107,226,677,224,102,2,223,223,1005,224,404,1001,223,1,223,7,226,677,224,1002,223,2,223,1005,224,419,101,1,223,223,1107,677,226,224,102,2,223,223,1006,224,434,1001,223,1,223,1107,226,226,224,1002,223,2,223,1006,224,449,101,1,223,223,1108,226,226,224,1002,223,2,223,1005,224,464,101,1,223,223,8,677,226,224,102,2,223,223,1005,224,479,101,1,223,223,8,226,226,224,1002,223,2,223,1006,224,494,1001,223,1,223,1007,226,677,224,1002,223,2,223,1006,224,509,1001,223,1,223,108,226,226,224,1002,223,2,223,1006,224,524,1001,223,1,223,1108,677,226,224,102,2,223,223,1006,224,539,101,1,223,223,1008,677,226,224,102,2,223,223,1006,224,554,101,1,223,223,107,226,677,224,1002,223,2,223,1006,224,569,101,1,223,223,107,677,677,224,102,2,223,223,1006,224,584,101,1,223,223,7,677,226,224,102,2,223,223,1005,224,599,101,1,223,223,1008,226,226,224,1002,223,2,223,1005,224,614,1001,223,1,223,107,226,226,224,1002,223,2,223,1005,224,629,101,1,223,223,7,226,226,224,102,2,223,223,1006,224,644,1001,223,1,223,1007,226,226,224,102,2,223,223,1006,224,659,101,1,223,223,108,677,677,224,102,2,223,223,1005,224,674,1001,223,1,223,4,223,99,226];
        const result: computeOutput = compute(program, 5);
        expect(result.output).to.not.be.undefined;
      });
    });
  });

});
