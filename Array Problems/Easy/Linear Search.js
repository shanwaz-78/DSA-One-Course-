function isNumPresent(arr, num) {
  if (!Array.isArray(arr)) {
    return [];
  }
  for (const index in arr) {
    if (arr[index] === num) {
      return index;
    }
  }
  return -1;
}
console.log(isNumPresent([1, 2, 3], 3)); // -> 2

