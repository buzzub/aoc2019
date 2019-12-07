export const compute = (program: number[]) => {
  // console.log('computing', program);
  for (let i = 0; i < program.length; i = i + 4) {
    if (program[i] === 99) {
      break;
    }
    if (program[i] === 1) {
      program = add(program, i);
    } else if (program[i] === 2) {
      program = multiply(program, i);
    } 
  }
  // console.log('finished', program);
  return program;
}

export const add = (arr: number[], pos: number) => {
  // console.log('adding ', arr[arr[pos + 1]], arr[arr[pos + 2]]);
  arr[arr[pos + 3]] = arr[arr[pos + 1]] + arr[arr[pos + 2]];
  return arr;
}

export const multiply = (arr: number[], pos: number) => {
  // console.log('multiplying', arr[arr[pos + 1]], arr[arr[pos + 2]]);
  arr[arr[pos + 3]] = arr[arr[pos + 1]] * arr[arr[pos + 2]];
  return arr;
}

let test = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,10,1,19,1,19,6,23,2,13,23,27,1,27,13,31,1,9,31,35,1,35,9,39,1,39,5,43,2,6,43,47,1,47,6,51,2,51,9,55,2,55,13,59,1,59,6,63,1,10,63,67,2,67,9,71,2,6,71,75,1,75,5,79,2,79,10,83,1,5,83,87,2,9,87,91,1,5,91,95,2,13,95,99,1,99,10,103,1,103,2,107,1,107,6,0,99,2,14,0,0];
const output = 19690720;
// console.log(compute(test)[0]);

export const determineInputs = () => {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      let testArray = [...test];
      testArray[1] = noun;
      testArray[2] = verb;
      const result = compute(testArray);
      if (result[0] === output) {
        console.log('noun %s, verb %s', noun, verb);
        break;
      }
    }
  }
}

console.log(determineInputs());