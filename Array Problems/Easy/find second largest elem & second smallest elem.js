function sortElem(arr) {
  let flag = true;
  while (flag) {
    flag = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
        flag = true;
      }
    }
  }
  const secondSmallest = arr[1];
  const seconLargest = arr[arr.length - 2];
  return [secondSmallest, seconLargest];
}
console.log(sortElem([7, 5, 4, 2, 6, 1])); // [2,6];

