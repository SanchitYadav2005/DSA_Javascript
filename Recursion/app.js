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

//inderict recursion- Where several functions depends upon one another. Just like they call each other.

let money = 100;
let totalApple = 0;

function buyApple(priceForOneApple) {
  if (priceForOneApple > 0) {
    console.log(`I have ${priceForOneApple} rs ${totalApple}`);
    buyMore(priceForOneApple);
  } else {
    console.log(`I don't have more money to buy, ${totalApple}`);
  }
}

function buyMore(priceForOneApple) {
  totalApple++;
  buyApple(priceForOneApple - 5);
}

buyApple(money);

//head recursion- If a recursive function is calling itself and that recursive call is the first statement in the function in the function then its known as Head recursion.

function random(x) {
  console.log(x);
  if (x > 0) {
    random(x - 1);
  }
}
random(5);

// tail recursion- If a recursive function calling itself and that recursive call is the last statement in the function then its known as tail recursion.
function random2(x) {
  if (x > 0) {
    random2(x - 1);
  }
  console.log(x);
}
random2(5);

// reversing an array using recursion

let data = [43, 45, 652, 432, 64, 12, 54];
let temp;

function reverseData(data, start, end) {
  console.log(data);
  if (start <= end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    reverseData(data, start + 1, end - 1);
  }
}

reverseData(data, 0, data.length - 1);
