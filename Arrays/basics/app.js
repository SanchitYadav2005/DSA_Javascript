// In this tutorial we have learned how to get any element from an array.
// this is a part of defining of arrays.
// here we are asking our script to get the button with class of btn so that we can submit the index from the user.
const btn = document.querySelector(".btn");
// defing the array length = 10
let array = [2, 3, 54, 12, 546, 7, 645, 32, 56, 32];
// added a event listener to button it will perform these steps:-
// 1. get the value from the input
// 2. showing the answer using alert to the screen.
// 3. and now removing the value passed by user.
btn.addEventListener("click", () => {
  let element = document.getElementById("element").value;
  alert(`Element of index:- ${array[element]}`);
  document.getElementById("element").value = "";
});

// now we will print all the elements from the array.
// created another button to display all the elements.
const allBtn = document.querySelector(".all-btn");
// created another div to display all the elements.
const allElements = document.querySelector(".all-elements");
// adding an event listener so that it can display all the elements from the array.
// The callback function is doing these things:-
// 1. setting allElements div empty
// 2. looping throung array
// 3. adding array values to the div and also adding a br tag to it.
allBtn.addEventListener("click", () => {
  allElements.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    allElements.innerHTML += array[i] + "<br/>";
  }
});

// inserting element at given position.
// Here we are setting the data and element and position also you can get the values from the use.
let data = [63, 23, 58, 25, 23];
let newElement = 52;
let position = 3;
// running the loop over the data and getting all the values from reverse side so that we can only shift the value in the left
for (let i = data.length - 1; i >= 0; i--) {
  if (i >= position) {
    data[i + 1] = data[i];
    if (i == position) {
      data[i] = newElement;
    }
  }
}
let list = (document.querySelector(".insert").innerHTML = data);

//deletion

// In deletion we usually shifts the values from back to forward and remove the last position as we know we can not delete element from the middle of an array.

let dataArray = [43, 5, 63, 23, 12, 67, 66, 88, 45, 32];
let place = document.querySelector("#delete").value;
let deleteBtn = document.querySelector(".delete-btn");
let beforeDelete = document.querySelector(".elementsBeforeDeleting");
let afterDelete = document.querySelector(".elementsAfterDeleting");
beforeDelete.innerHTML = dataArray + "<br/>";
deleteBtn.addEventListener("click", () => {
  for (let i = place; i < dataArray.length - 1; i++) {
    dataArray[i] = dataArray[i + 1];
  }
  dataArray.length = dataArray.length - 1;
  afterDelete.innerHTML = dataArray + "<br/>";
});

// Searching an element in an array
// 1. we will use linear search other searching algos will be listed in searching parts.

let itemList = [25, 36, 24, 24, 24, 24, 77, 89, 21];
let item = 24;
let index = [];
let flag = [];
// I used this for have same values in the array.
for (let i = 0; i < itemList.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < itemList.length; j++) {
    if (i !== j && itemList[i] === itemList[j]) {
      isDuplicate = true;
      break;
    }
  }
  flag.push(isDuplicate);
}

console.log(flag);
for (let i = 0; i < itemList.length; i++) {
  if (itemList[i] === item && flag[i]) {
    index.push(i);
  }
}
console.log(index);

//Merging two arrays

// in the first method we are going to use for loop

let moreData = [23, 32, 45, 1, 3, 5, 43, 13, 35];
let data2 = [54, 254, 154, 334, 657, 32, 57, 3, 255, 4];
let data3 = [];

for (let i = 0; i < moreData.length; i++) {
  data3[i] = moreData[i];
}
console.log(data3);
for (let i = 0; i < data2.length; i++) {
  data3[moreData.length + i] = data2[i];
}
console.log(data3);

// using while loop.
// problem is you have to sort them by yourself
let a = [54, 254, 154, 334, 657, 32, 57, 3, 255, 4];
let b = [23, 32, 45, 1, 3, 5, 43, 13, 35];
let c = [];
a = a.sort();
b = b.sort();
let d1 = 0;
let d2 = 0;
let d3 = 0;

while (d1 < a.length && d2 < b.length) {
  if (a[d1] < b[d2]) {
    c[d3] = a[d1];
    d1++;
  } else {
    c[d3] = b[d2];
    d2++; // Increment d2 instead of d1
  }
  d3++;
}

// If there are remaining elements in array 'a', add them to 'c'
while (d1 < a.length) {
  c[d3] = a[d1];
  d1++;
  d3++;
}

// If there are remaining elements in array 'b', add them to 'c'
while (d2 < b.length) {
  c[d3] = b[d2];
  d2++;
  d3++;
}

console.log(c);
