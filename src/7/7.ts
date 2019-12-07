import { intcodeComputer, computeOutput } from '../0/intcode';
import { logger } from '../0/logger';

// phaseSetting = [3,1,2,4,0]
export const compute = (program: number[], phaseSetting: number[]): number => {
  logger(`trying ${JSON.stringify(phaseSetting)}`);
  let outputSignal: number = 0;
  for (let i = 0; i < phaseSetting.length; i++) {
    const computedOutput: computeOutput = intcodeComputer(program, [phaseSetting[i], outputSignal]);
    outputSignal = computedOutput.output;
  }
  return outputSignal;
}

export const generatePhaseSettings = (length: number): number[][] => {
  let initialArray = [];
  for (let a = 0; a < length; a++) {
    initialArray.push(a);
  }
  return permutator(initialArray);
}

export const permutator = (inputArr: number[]) => {
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
      }
    }
  }
  permute(inputArr)
  return result;
}

export const findHighestSignal = (program: number[], phases: number): number => {
  let highestSignal: number = 0;
  let phaseSettings = generatePhaseSettings(phases);
  for (let i = 0; i < phaseSettings.length; i++) {
    const output = compute(program, phaseSettings[i]);
    // const output = compute(program, [0,1,2,3,4]);
    if (output > highestSignal) {
      highestSignal = output;
    }
  }
  return highestSignal;
}