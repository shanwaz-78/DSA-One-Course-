function isNumPresent(arr, num) {
  if (!Array.isArray(arr)) {
    return [];
  }
  for (const i in arr) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}
isNumPresent([1, 2, 3], 3); // -> 2
