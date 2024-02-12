// Recursion = A function that repeats itself until the given condition statisfies (just like loop)

//1. we will print 100 number using recursion

function numbers(num) {
  console.log(num);
  if (num < 10) {
    numbers(num + 1);
  }
}
// this will not going to be 10 outside the function.X
let givenNum = 0;
numbers(givenNum);
console.log(givenNum);

//2. Factroial program

function factorial(fact) {
  if (fact == 0) {
    return 1;
  }
  return fact * factorial(fact - 1);
}
let factData = 5;
console.log(factorial(factData));
