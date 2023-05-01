function findLargestElem(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    };
  };
  return largest;
}
console.log(findLargestElem([2, 5, 3, 6, 1])); // -> 6;
