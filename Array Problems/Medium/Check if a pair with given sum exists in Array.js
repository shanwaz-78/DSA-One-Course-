function checkSum(arr, target) {
  let indicis = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        indicis.push(i, j);
      }
    }
  }
  return indicis;
}
checkSum([2, 1, 4, 3], 4);
