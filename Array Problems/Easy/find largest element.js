function findLargestElem(arr) {
  let largest = -Infinity;
  for (const key of arr) {
    if (key > largest) {
      largest = key;
    }
  }
  return largest;
}
console.log(findLargestElem([2, 5, 3, 6, 1])); // -> 6;

