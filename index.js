/* eslint-disable no-console */

/* 
// задание №1
const getDistance = (x1, y1, x2, y2) =>
  Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

const showResult = (x1, y1, x2, y2, d) =>
  console.log(
    `Расстояние между точкой (${x1}, ${y1}) и точкой (${x2}, ${y2}) равняется ${d}`
  );

const px1 = 20;
const py1 = 10;

const px2 = 30;
const py2 = 10;

const d = getDistance(px1, py1, px2, py2);

showResult(px1, py1, px2, py2, d); */

// задание №1 (oject)

const getDistance = (x1, y1, x2, y2) =>
  Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));

const showResult = (point, d) =>
  console.log(
    `Расстояние между точкой (${point.x1}, ${point.y1}) и точкой (${point.x2}, ${point.y2}) равняется ${d}`
  );

const point = {
  x1: 20,
  y1: 10,
  x2: 30,
  y2: 10,
};
const d = getDistance(point.x1, point.y1, point.x2, point.y2);

showResult(point, d);

// задание №2

/* const Triangle = (a, b, c) => a ** 2 + b ** 2 === c ** 2;
const ax = 10;
const bx = 15;
const cx = 20;
const a = Triangle(ax, bx, cx);
console.log(`Теорема Пифагора для чисел ${ax}, ${bx}, ${cx}, ${a}`);
 */



// задание №2 (Object)

const Triangle = (a, b, c) => a ** 2 + b ** 2 === c ** 2;
const lengths = {
  a: 10,
  b: 15,
  c: 20,
}
const a = Triangle(lengths.a, lengths.b, lengths.c);
console.log(`Теорема Пифагора для чисел ${lengths.a}, ${lengths.b}, ${lengths.c}, ${a}`);


// задание №3


function triangle(a, b, c) {
  const check1 = a + b > c;
  const check2 = b + c > a;
  const check3 = c + a > b;
  const answer = check1 && check2 && check3;
  const action = answer ? "можно" : "нельзя";
  return console.log(`на сторонах с длинами
  ${a}, ${b}, ${c} ${action} построить треугольник`);
}

triangle(5, 18, 8);

// задание №4  (аполнить массив 20 числами которые делятся на 3, или на 5, или на 15 и вывести его на экран )

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
  return numbers;
}
console.log(numb(20, 3, 5, 15));

// задание №5 (посчитать произведение всех элементов находящихся в каждой третьей позиции)

const thirdposition = () => {
  let position = 1;

  for (let i = 0; i < numbers.length; i += 3) {
    position *= numbers[i];
  }
  console.log(
    `произведение всех элементов находящихся в каждой третьей позиции ${position}`
  );
};

thirdposition();

// задание №6 (посчитать среднее арифметическое всех чисел)

const Sumall = () => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  return console.log(`среднее арифметическое всех чисел ${average}`);
};

Sumall();

// задание №7 (найти максимальное и минимальное число)

const Max = () => {
  let max = numbers[0];
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    if (max < numbers[i]) max = numbers[i];
  }
  for (let i = 1; i < numbers.length; i += 1) {
    if (min > numbers[i]) min = numbers[i];
  }

  return console.log(`максимальное число  ${max}, ${min}`);
};
Max();

// задание №8 (вывести матрицу таблицы умножения)

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

