//Display numbers from 1 to 10
for (let i = 1; i<=10; i++) {
  console.log(i)
}

//Print the odd numbers less than 100
for (let i = 1; i<=100; i++) {
  if (i % 2!== 0) console.log(i);
}

//Print the multiplication table with 7
for(let i = 1; i <= 10; i++) {
    const result = i * 7;
    console.log(`${7} * ${i} = ${result}`);
}

//Print all the multiplication tables with numbers from 1 to 10
for(let a = 1;a<=10;a++){
  for(let b = 1;b<=10;b++){
      console.log(`${a} * ${b} = ${a*b}`);
  }
}

//Calculate the sum of numbers from 1 to 10
const numSum = n => {
  let sum = 0;
    for(let i = 1; i <= n; i++) {
      sum += i; 
      }
  console.log(sum)
}
numSum(10);

//Calculate 10!
const factorialize = num => {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
factorialize(10);

//Calculate the sum of odd numbers greater than 10 and less than 30
const numSum1 = n => {
  let sum = 0;
    for(let i = 10; i <= n; i++) {
      if (i % 2!== 0)
      sum += i; 
      }
  console.log(sum)
}
numSum(30);

//Calculate the sum of numbers in an array of numbers
const numbers = [5, 10, 15, 20];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum); 

//Calculate the average of the numbers in an array of numbers
const averageArray = [40, 60, 90, 10, 6];
let averageArrayNum = 0;
for(let i = 0; i < averageArray.length; i++){
  console.log(averageArray[i])
}

// Create a function that receives an array of numbers and returns an array containing only the positive numbers
const numbers1 = [-5, 3, 6, -17, -40, 30, 8, 7];
const filtered = numbers1.filter(n => n >= 0);
console.log(filtered);

//Find the maximum number in an array of numbers
const numbers2 = [60, 4, 2, 80, 12, 5, 120, 27];
console.log(Math.max(...numbers2));

//Create a function that will return a Boolean specifying if a number is prime
const isPrime = num => {
  if(num <2) {
    return false
  } for(let i = 2; i<num; i++){
      if(num % i === 0){
        return false;
      }
    }
    return true
}
console.log(isPrime(11));
console.log(isPrime(8));
console.log(isPrime(21));
console.log(isPrime(127));

//Calculate the sum of digits of a positive integer number
const getSum = n => {
  let sum = 0;
  while (n != 0) {
      sum = sum + n % 10;
      n = parseInt(n / 10);
  }
  return sum;
}
let n = 47;
console.log(getSum(n));

//Print the first 100 prime numbers
const checkPrimeNumber = num => {
  for(let i = 2; i<num - 1; i++){
      if(num % i === 0){
        return false;
      }
      return true
    }
}
const printPrimeNumber = number4 => {
  if(checkPrimeNumber(number4) === true){
    console.log(number4);
  }
}
const printNumbers = range => {
  for(j=1; j<=range; j++){
    printPrimeNumber(j);
  }
}
let maxnumber = 100;
printNumbers(maxnumber);

//Rotate an array to the left 1 position
const rotateArr = arr => {
  return [arr[1], arr[2], arr[0]]
  }
  console.log(rotateArr([14,25,36]))

//Reverse an array
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers5.reverse();
console.log(numbers5);

//Create a function that will merge two arrays and return the result as a new array
const candy = [`Skittles`, `M&M's`];
const chocolate = [`Hershey's`, `Ferrero Rocher`];
candy.push(...chocolate);
candy;

//Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2,6,7,8,9,1];

function bb(a1, a2, accumulator = []) {
  return a1.reduce((acc, v) => {
    if(!a2.includes(v)) {
      acc.push(v);
    }

    return acc;
  }, accumulator);
}


const newArr = bb(arr2, arr1, bb(arr1, arr2));
console.log("new ARR", newArr)

//Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
const myArray = [2, 5, 1, 5, 9, 2, 4, 8, 3, 9];
let newArray = [...new Set(myArray)];
console.log(newArray);

//Create a function that will return the number of words in a text
function WordCount(str) { 
  return str.split(" ").length;
}
console.log(WordCount(`Hi, my name is Elena, and I'm a mom of two awesome girls!`));
