// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

let sum = 0;
const num1 = 5,
  num2 = 13,
  num3 = 7,
  num4 = 21,
  num5 = 48;

sum = num1 + num2 + num3 + num4 + num5;
console.log(sum);

const arr = [1, 2, 3, 4, 5];

arr.forEach((element) => {
  sum = element + sum;
});

console.log(sum);
