// It is a linear data structure

let data = [];
let currentSize = data.length;
let max = 5; // we have to define the max lenght that stack can have.

function push(newVal) {
  if (currentSize >= max) {
   alert("stack is full for " + newVal);
   
  } else {
    data[currentSize] = newVal;
    currentSize++;
  }
}

function pop() {
  if (currentSize > 0) {
    currentSize--;
    data.length = currentSize;
  } else {
    alert("stack is already empty");
  }
}

push(34)
push(44)
push(32)
push(24)
push(31)
pop();
pop()



console.log(data)

