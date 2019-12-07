import { logger } from './logger';

enum ParameterMode {
  POSITION = '0',
  IMMEDIATE = '1',
}

interface DecodedInstruction {
  opcode: string,
  param1mode: string,
  param2mode: string,
  param3mode: string,
}

export interface computeOutput {
  program: number[],
  output: number,
}

export const intcodeComputer = (program: number[], inputs: number[]): computeOutput => {
  let continueProgram = true;
  let lastOutput: number;
  let i = 0;
  let inputCount = 0;
  while (continueProgram && i < program.length) {
    const instruction = decodeInstruction(program[i]);
    // logger(JSON.stringify(program));
    switch (parseInt(instruction.opcode, 10)) {
      case 1:
        // 1,0,0,0,99 becomes 2,0,0,0,99 (1 + 1 = 2)
        program = add(program, instruction, i);
        i = i + 4;
        break;
      case 2:
        // 2,3,0,3,99 becomes 2,3,0,6,99 (3 * 2 = 6)
        program = multiply(program, instruction, i);
        i = i + 4
        break;
      case 3:
        // 3,50 would take an input value and store it at address 50
        program = input(program, i, inputs[inputCount]);
        inputCount++;
        i = i + 2;
        break;
      case 4:
        // 4,50 would output the value at address 50
        lastOutput = output(program, instruction, i);
        i = i + 2;
        break;
      case 5:
        // if the first parameter is non-zero, it sets the instruction pointer to the value 
        // from the second parameter. Otherwise, it does nothing.
        i = jumpIfTrue(program, instruction, i);
        break;
      case 6:
        // if the first parameter is zero, it sets the instruction pointer to the value
        // from the second parameter. Otherwise, it does nothing.
        i = jumpIfFalse(program, instruction, i);
        break;
      case 7:
        // if the first parameter is less than the second parameter, it stores 1 in the 
        // position given by the third parameter. Otherwise, it stores 0.
        program = lessThan(program, instruction, i);
        i = i + 4
        break;
      case 8:
        // if the first parameter is equal to the second parameter, it stores 1 in the
        // position given by the third parameter. Otherwise, it stores 0.
        program = equals(program, instruction, i);
        i = i + 4
        break;
      case 99:
        continueProgram = false;
        break;
      default:
        i = i + 1;
    }
  }
  return {
    program: program,
    output: lastOutput
  };
}

export const add = (arr: number[], ins: DecodedInstruction, pos: number) => {
  const p1: number = arr[getLocation(arr, ins, pos, 1)];
  const p2: number = arr[getLocation(arr, ins, pos, 2)];
  const loc: number = getLocation(arr, ins, pos, 3);
  logger(`ADD: ${p1} + ${p2}, store in position ${loc}`);
  arr[loc] = p1 + p2;
  return arr;
}

export const multiply = (arr: number[], ins: DecodedInstruction, pos: number) => {
  const p1: number = arr[getLocation(arr, ins, pos, 1)];
  const p2: number = arr[getLocation(arr, ins, pos, 2)];
  const loc: number = getLocation(arr, ins, pos, 3);
  logger(`MULTIPLY: ${p1} * ${p2}, store in position ${loc}`);
  arr[loc] = p1 * p2;
  return arr;
}

export const input = (arr: number[], pos: number, input: number) => {
  logger(`INPUT: ${input}`);
  arr[arr[pos + 1]] = input;
  return arr;
}

export const output = (arr: number[], ins: DecodedInstruction, pos: number) => {
  const loc: number = getLocation(arr, ins, pos, 1);
  const val: number = arr[loc];
  logger(`>> OUTPUT: ${val}`, true);
  return val;
}

export const jumpIfTrue = (arr: number[], ins: DecodedInstruction, pos: number) => {
  const p1: number = arr[getLocation(arr, ins, pos, 1)];
  const p2: number = arr[getLocation(arr, ins, pos, 2)];
  logger(`JUMP TO ${p2} IF ${p1} !== 0: ${p1 !== 0}`);
  return p1 !== 0 ? p2 : pos + 3;
}

export const jumpIfFalse = (arr: number[], ins: DecodedInstruction, pos: number) => {
  const p1: number = arr[getLocation(arr, ins, pos, 1)];
  const p2: number = arr[getLocation(arr, ins, pos, 2)];
  logger(`JUMP TO ${p2} IF ${p1} === 0: ${p1 === 0}`);
  return p1 === 0 ? p2 : pos + 3;
}

export const lessThan = (arr: number[], ins: DecodedInstruction, pos: number) => {
  const p1: number = arr[getLocation(arr, ins, pos, 1)];
  const p2: number = arr[getLocation(arr, ins, pos, 2)];
  logger(`LESS THAN: ${p1} < ${p2} then store 1 in ${arr[pos + 3]}`);
  arr[arr[pos + 3]] = p1 < p2 ? 1 : 0;
  return arr;
}

export const equals = (arr: number[], ins: DecodedInstruction, pos: number) => {
  const p1: number = arr[getLocation(arr, ins, pos, 1)];
  const p2: number = arr[getLocation(arr, ins, pos, 2)];
  logger(`EQUALS: ${p1} === ${p2} then store 1 in ${arr[pos + 3]}`);
  arr[arr[pos + 3]] = p1 === p2 ? 1 : 0;
  return arr;
}

export const getLocation = (arr: number[], ins: DecodedInstruction, pos: number, paramNum: number) => {
  return ins[`param${paramNum}mode`] === ParameterMode.IMMEDIATE ? pos + paramNum : arr[pos + paramNum];
}

export const padInstruction = (instruction: number) => {
  return `00000${Math.abs(instruction)}`.slice(-5);
}

export const decodeInstruction = (instruction: number): DecodedInstruction => {
  logger(`decoding ${instruction}`);
  let ins: string = padInstruction(instruction);
  return {
    opcode: ins.substr(3,2),
    param1mode: ins[2],
    param2mode: ins[1],
    param3mode: ins[0]
  }
}
