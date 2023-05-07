function moveZero(arrOfNumbers) {
  if (!Array.isArray(arrOfNumbers)) {
    return [];
  }
  let allZero = [];
  let newArr = [];
  for (let i = 0; i < arrOfNumbers.length; i++) {
    if (arrOfNumbers[i] === 0) {
      allZero.push(arrOfNumbers[i]);
    } else {
      newArr.push(arrOfNumbers[i]);
    }
  }
  return newArr.concat(allZero);
}

moveZero([1, 0, 2, 3, 0, 4, 0, 1]); // -> [1,2,3,4,1,0,0,0]
