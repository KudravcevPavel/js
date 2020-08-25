/* eslint-disable no-console */

// Задание 1 //

const a = [];

for (let i = 1; i <= 1000; i += 1) {
  if (i % 3 == 0) if (i % 5 == 0) if (i % 15 == 0) a.push(i);
}

for (let i = 0; i < 20; i += 1) {
  console.log(`a[${i}] = ${a[i]}`);
}

let sum = 0;
let three = 0;
let MaxNamber = 0;
let MinNamber = 0;

for (let i = 0; i < a.length; i += 1) {
  sum += a[i];
  position = +a[2] + a[5] + a[8] + a[11] + a[14] + a[17];
  MaxNamber = a[19];
  MinNamber = a[0];
}

let avarage = sum / a.length;
console.log(avarage, position, MaxNamber, MinNamber);

// Задание 2 //
const b = [];
let result = " 0 ";
let summainDiag = 0;

for (let i = 0; i < 11; i++) {
  for (let j = 0; j < 11; j++) {
    if (i == 0 && j > 0) {
      result += "[" + j + "]";
    } else if (j == 0 && i > 0) {
      result += "[" + i + "] ";
    } else if (i > 0 && j > 0) {
      result += i * j + " ";
    }
    
  }
  b.push(i);
  result += "\n";
}

console.log(result);


