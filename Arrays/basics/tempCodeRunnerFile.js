// In this tutorial we have learned how to get any element from an array.
// // this is a part of defining of arrays.
// // here we are asking our script to get the button with class of btn so that we can submit the index from the user.
// const btn = document.querySelector(".btn");
// // defing the array length = 10
// let array = [2, 3, 54, 12, 546, 7, 645, 32, 56, 32];
// // added a event listener to button it will perform these steps:-
// // 1. get the value from the input
// // 2. showing the answer using alert to the screen.
// // 3. and now removing the value passed by user.
// btn.addEventListener("click", () => {
//   let element = document.getElementById("element").value;
//   alert(`Element of index:- ${array[element]}`);
//   document.getElementById("element").value = "";
// });

// // now we will print all the elements from the array.
// // created another button to display all the elements.
// const allBtn = document.querySelector(".all-btn");
// // created another div to display all the elements.
// const allElements = document.querySelector(".all-elements");
// // adding an event listener so that it can display all the elements from the array.
// // The callback function is doing these things:-
// // 1. setting allElements div empty
// // 2. looping throung array
// // 3. adding array values to the div and also adding a br tag to it.
// allBtn.addEventListener("click", () => {
//   allElements.innerHTML = "";
//   for (let i = 0; i < array.length; i++) {
//     allElements.innerHTML += array[i] + "<br/>";
//   }
// });
