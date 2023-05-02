function sortElem(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    const temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
}
sortElem([7, 5, 4, 2, 6, 1]);
const secondSmallest = arr[1];
const secondLargest = arr[arr.length - 2];
console.log(secondLargest); // -> 6
console.log(secondSmallest); // -> 2
