function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      return true;
    }
  }
  return false;
}

console.log(isSorted([1, 2, 3, 4])); // -> true
console.log(isSorted([4, 3, 2, 1])); // -> false

