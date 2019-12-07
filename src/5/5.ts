import { intcodeComputer, computeOutput } from '../0/intcode';

export const compute = (program: number[], inputValue?: number): computeOutput => {
  return intcodeComputer(program, [inputValue]);
}