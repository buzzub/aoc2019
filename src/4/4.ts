// It is a six-digit number.
// The value is within the range given in your puzzle input.
// Two adjacent digits are the same (like 22 in 122345).
// Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
// Other than the range rule, the following are true:

// 111111 meets these criteria (double 11, never decreases).
// 223450 does not meet these criteria (decreasing pair of digits 50).
// 123789 does not meet these criteria (no double).

export const calculateNumberOfPasswords = (first: number, last: number): number => {
  let numberOfPasswords = 0;
  for (let i = first; i <= last; i++) {
    let code = convertNumberToArray(i);
    // console.log('code', code);
    if (hasIncreasingDigits(code) && hasDoubles(code)) {
      numberOfPasswords++;
    }
  }
  console.log('Number of passwords in range %s to %s is %s', first, last, numberOfPasswords);
  return numberOfPasswords;
}

export const calculateNumberOfPasswordsPart2 = (first: number, last: number): number => {
  let numberOfPasswords = 0;
  for (let i = first; i <= last; i++) {
    let code = convertNumberToArray(i);
    // console.log('code', code);
    if (hasIncreasingDigits(code) && hasDoubles(code)) {
      if (hasValidMultiples(code)) {
        numberOfPasswords++;
      }
    }
  }
  console.log('Number of passwords in new range %s to %s is %s', first, last, numberOfPasswords);
  return numberOfPasswords;
}

export const convertNumberToArray = (num: number) => {
  let str = num.toString();
  let arrayOfDigitis = [];
  for (let i = 0; i < str.length; i++) {
    arrayOfDigitis.push(parseInt(str[i], 10));
  }
  return arrayOfDigitis;
}

export const hasDoubles = (code: number[]) => {
  for (let i = 0; i < code.length - 1; i++) {
    if (code[i] === code[i + 1]) {
      return true;
    }
  }
  return false;
}

// if there are 3s or 4s then need to check the rest of the code
// 123444 = invalid
// 113444 = invalid
// 111444 = invalid
// 111122 = valid
export const hasValidMultiples = (code: number[]) => {
  let multiples = [];
  for (let i = 0; i < code.length - 1; i++) {
    // 6
    if (code[i] === code[i + 1] && code[i + 1] === code[i + 2]
      && code[i + 2] === code[i + 3] && code[i + 3] === code[i + 4]
      && code[i + 4] === code[i + 5]) {
      return false;
    }
    // 5
    if (code[i] === code[i + 1] && code[i + 1] === code[i + 2]
      && code[i + 2] === code[i + 3] && code[i + 3] === code[i + 4]) {
      return false;
    }

    // 4
    if (code[i] === code[i + 1]
      && code[i + 1] === code[i + 2]
      && code[i + 2] === code[i + 3]) {
      multiples.push(`${code[i]}${code[i+1]}${code[i+2]}${code[i+3]}`);
      i = i + 3;
      continue;
    }

    // 3
    if (code[i] === code[i + 1] && code[i + 1] === code[i + 2]) {
      multiples.push(`${code[i]}${code[i+1]}${code[i+2]}`);
      i = i + 2;
      continue;
    }

    // 2
    if (code[i] === code[i + 1]) {
      multiples.push(`${code[i]}${code[i+1]}`);
      i = i + 1;
      continue;
    }
  }
  
  multiples.sort(); // array contains 2s, 3s and 4s
  // console.log(multiples);
  if (multiples.length === 3 ) {
    // console.log(multiples , true);
    return true // all doubles!
  }

  if (multiples.length === 2 ) {
    return multiples[0].length === 2 || multiples[1].length === 2;
  }

  if (multiples.length === 1) {
    return multiples[0].length === 2;
  }

  return false;
}

export const hasIncreasingDigits = (code: number[]) => {
  return !(code[0] > code[1] || code[1] > code[2] || code[2] > code[3] || code[3] > code[4] || code[4] > code[5]);
}




// if (multiples.length === 2 ) {
//   console.log(multiples , multiples[1].length <= 2);
//   if (multiples[1].length > 2) {
//     return false;
//   }
//   if (multiples[0].length === 2 && multiples[1].length === 2) {
//     return true;
//   }
//   return multiples[0].length === 3 && multiples[1].length === 2;
// }

// if (multiples.length === 1) {
//   console.log(multiples , multiples[0].length === 2);
//   return multiples[0].length === 2; // e.g. '33' valid, '333' invalid
// }