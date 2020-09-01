/* eslint-disable no-console */
const numbers = [];

let number = 3;

function numb(length, a, b, c) {
  console.log(`длина = ${length}`);
  while (numbers.length < length) {
    const matched = number % a === 0 || number % b === 0 || number % c === 0;
    if (matched) {
      numbers.push(number);
    }
    number += 1;
  }
  return console.log(numbers);
}
numb(20, 3, 5, 15);

/* Не Красиво  //*


/* const matrix1 = [];

function matrixfor1(a, b) {
  for (let i = 1; i <= a; i += 1) {
    const row = [];
    for (let j = 1; j <= b; j += 1) {
      row.push(i * j);
    }
    matrix1.push(row);
  }
}

function matrixfor2(a, b) {
  for (let i = 0; i < a; i += 1) {
    let row = "";
    for (let j = 0; j < b; j += 1) {
      row += `${matrix1[i][j].toString()}\t`;
    }
    console.log(row);
  }
  return matrix1;
}

function tab(a, b) {
  matrixfor1(a, b);
  matrixfor2(a, b);
}

tab(matrixfor1(10, 15), matrixfor2(10, 15));
 */




const matrix = [];

function tab(a, b) {

  for (let i = 1; i <= a; i += 1) {
    const row = [];
    for (let j = 1; j <= b; j += 1) {
      row.push(i * j);
    }
    matrix.push(row);
  }

  for (let i = 0; i < a; i += 1) {
    let row = "";
    for (let j = 0; j < b; j += 1) {
      row += `${matrix[i][j].toString()}\t`;
    }
    console.log(row);
  }
  return matrix;
}

tab(10, 5);



function triangle (a, b, c) {
  const check1 = a + b > c;
  const check2 = b + c >a;
  const check3 = c + a >b;
  const answer = check1 && check2 && check3;
  const action = answer ? "можно" : "нельзя";
  return console. log(`на сторонах с длинами
  ${a}, ${b}, ${c} ${action} построить треугольник`);
}

triangle (5, 18, 8);






/* Не разобрался до конца //*


/* const matrix = [];

function tab3(a) {
  for (let i = 1; i <= a; i += 1) {
    return i <= a ? i : a;
  }
}

function tab4(b) {
  for (let i = 1; i <= b; i += 1) {
    return i <= b ? i : b;
  }
}

function tab(a, b) {

  tab3(a); {
    const row = [];
    tab4(b);
    row.push(i * j);
    matrix.push(row);
  }

  tab3(a); {
    let row = "";
    tab4(b);
    row += `${matrix[i][j].toString()}\t`;
    console.log(row);
  }
  return matrix;
}
tab3(10);
tab4(10);
tab(10, 5); */
























/* 

function sumProduct (){
let product = 1;
for (let index = 2; index < numbers.length; index += 3) {
  product *= numbers[index];
}
console.log(product);
}
sumProduct();

let max = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (max < numbers[index]) {
    max = numbers[index];
  }
}

console.log(`max = ${max}`);

let min = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (min > numbers[index]) {
    min = numbers[index];
  }
}

console.log(`min = ${min}`);

const matrix = [];

for (let i = 1; i <= 9; i += 1) {
  const row = [];
  for (let j = 1; j <= 9; j += 1) {
    row.push(i * j);
  }
  matrix.push(row);
}

for (let i = 0; i < 9; i += 1) {
  let row = "";
  for (let j = 0; j < 9; j += 1) {
    row += `${matrix[i][j].toString()}\t`;
  }
  console.log(row);
}


let sum = 0;
for (let i = 0; i < 9; i += 1) {
  sum += matrix[i][i];
}

console.log(`sum = ${sum}`);

console.log("============================");

let mProduct = 1;
let mCount = 0;
for (let i = 0; i < 9; i += 1) {
  mProduct *= matrix[i][8 - i];
  mCount += 1;
}

console.log(
  `mProduct = ${mProduct}, mCount = ${mCount}, g.avg = ${mProduct / mCount}`
);

console.log("***********************************************");

const m = [];

for (let i = 0; i < 9; i += 1) {
  const row = [];
  for (let j = 0; j < 9; j += 1) {
    row.push(`${i}:${j}`);
  }
  m.push(row);
}

for (let i = 0; i < 9; i += 1) {
  let row = "";
  for (let j = 0; j < 9; j += 1) {
    row += `${m[i][j].toString()}\t`;
  }
  console.log(row);
}

console.log("============================");

for (let j = 2; j < 9; j += 2) {
  let column = "";
  for (let i = 0; i < 9; i += 1) {
    column += `${m[i][j].toString()}\t`;
  }
  console.log(column);
}

// ********************************************************************
console.log("***********************************************");

// перебор элементов матрицы по строкам

// перебираем строки и тогда i это номер строки
for (let i = 0; i < 9; i += 1) {
  // перебираем столбцы и тогда j это номер столбца
  for (let j = 0; j < 9; j += 1) {
    // индекс элемента это i, j
    const value = matrix[i][j];
  }
}

// перебор элементов матрицы по столбцам

// перебираем столбцы и тогда i это номер столбца
for (let i = 0; i < 9; i += 1) {
  // перебираем строки и тогда j это номер строки
  for (let j = 0; j < 9; j += 1) {
    // индекс элемента это j, i
    const value = matrix[j][i];
  }
}

const sums = [];
for (let i = 2; i < 9; i += 2) {
  let columnSum = 0;
  for (let j = 0; j < 9; j += 1) {
    columnSum += matrix[j][i];
  }
  sums.push(columnSum);
}

let total = 0;
for (let i = 0; i < sums.length; i += 1) {
  total += sums[i];
}

// преобразовавние одномерного массива в строку с разделителем между элементами
let seqText = "";
let separator = ", ";
for (let i = 0; i < sums.length; i += 1) {
  if (i === sums.length - 1) {
    separator = "";
  }
  seqText += `${sums[i].toString()}${separator}`;
}

console.log(
  `Среднее арифметическое последовательности: (${seqText}) равняется = ${
    total / sums.length
  }`
);

for (let i = 0; i < 9; i += 1) {
  let row = "";
  for (let j = 0; j < 9; j += 1) {
    row += `${matrix[i][j].toString()}\t`;
  }
  console.log(row);
}

console.log("==================================================");

for (let i = 0; i < 9; i += 1) {
  let row = "";
  for (let j = 0; j < 9 - i; j += 1) {
    row += `${matrix[i][j].toString()}\t`;
  }
  console.log(row);
}
 */