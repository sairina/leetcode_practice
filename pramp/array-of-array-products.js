// Array of Array Products
// Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

// Solve without using division and analyze your solution’s time and space complexities.

// Examples:

// input:  arr = [8, 10, 2]
// output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

// input:  arr = [2, 7, 3, 4]
// output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]

function calcProductArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    newArr.push(product);
  }
  return newArr;
}

calcProductArray([2, 7, 3, 4])

function calcProductArray(arr) {
  let finalArr = [];
  let tempArr = [];
  let left = 1;
  let right = 1;

  for (let i = 0; i < arr.length; i++) {
    tempArr[i] = left;
    left *= arr[i];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    finalArr[i] = tempArr[i] * right;
    right *= arr[i];
  }

  return finalArr;
}

calcProductArray([2, 7, 3, 4])

